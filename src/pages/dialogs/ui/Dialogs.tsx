import { ChevronDown } from 'lucide-react'
import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { PageLayout } from '@/app/PageLayout/PageLayout'
import { useDialogs } from '@/pages/dialogs/model/useDialogs'
import { DialogList } from '@/pages/dialogs/ui/DialogList'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Search } from '@/shared/ui/Search/Search'

import { S } from './dialogs.styles'

export const Dialogs = () => {
  const {
    dialogs,
    handleLink,
    handleSearch,
    isMobile,
    paramId,
    searchDialogs,
    users,
  } = useDialogs()

  const searchItems = () => {
    return searchDialogs
      .map(dialog => (
        <li key={dialog.id}>
          <Link
            onClick={() =>
              handleLink({
                id: dialog.id,
                name: dialog.userName,
                photos: dialog.photos,
              })
            }
            to={`${dialog.id}`}
          >
            {dialog.userName}
          </Link>
        </li>
      ))
      .concat(
        users.map((user, i) => (
          <Fragment key={user.id}>
            {i === 0 ? (
              <S.SearchSeparator>
                <ChevronDown /> Global users <ChevronDown />
              </S.SearchSeparator>
            ) : null}
            <li>
              <Link onClick={() => handleLink(user)} to={`${user.id}`}>
                {user.name}
              </Link>
            </li>
          </Fragment>
        )),
      )
  }

  const searchComponent = (
    <Search
      placeholder={'Search users'}
      searchItems={searchItems()}
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
