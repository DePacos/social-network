import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks/useStateHook'
import { PageLayout } from '@/app/PageLayout/PageLayout'
import { selectDialogs } from '@/entities/reducers/dialogSlice'
import { selectSearchUsers } from '@/entities/reducers/usersSlice'
import { useDialogs } from '@/pages/dialogs/model/useDialogs'
import { DialogList } from '@/pages/dialogs/ui/DialogList'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Search } from '@/shared/ui/Search/Search'

import { S } from './dialogs.styles'

export const Dialogs = () => {
  const dialogs = useAppSelector(selectDialogs)
  const usersFound = useAppSelector(selectSearchUsers)

  const { handleLink, handleSearch, isMobile, paramId } = useDialogs()

  const searchComponent = (
    <Search
      placeholder={'Search users'}
      searchItems={usersFound.map(user => (
        <li>
          <Link onClick={() => handleLink(user)} to={`${user.id}`}>
            {user.name}
          </Link>
        </li>
      ))}
      callback={handleSearch}
    />
  )

  return (
    <PageLayout title={'Dialogs'} image={dialogsBg}>
      {isMobile && searchComponent}
      <S.DialogsWrap>
        <S.Contacts>
          {!isMobile && searchComponent}
          <DialogList
            dialogs={dialogs}
            id={paramId || '0'}
            handleLink={handleLink}
          />
        </S.Contacts>
        {paramId ? (
          <Outlet />
        ) : (
          <S.NoDialogMessage>
            Find or select a user to start a dialog
          </S.NoDialogMessage>
        )}
      </S.DialogsWrap>
    </PageLayout>
  )
}
