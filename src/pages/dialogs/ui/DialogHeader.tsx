import { CircleUserRound, RefreshCcw } from 'lucide-react'
import React from 'react'

import { UserDialog } from '@/app/types/types'
import { useDialogHeader } from '@/pages/dialogs/model/useDialogHeader'
import { S } from '@/pages/dialogs/ui/dialog.styles'
import { Button } from '@/shared/ui/Button/Button'
import { FormDataPicker } from '@/shared/ui/DatePicker/FormDataPicker'

type Props = {
  userDialog: UserDialog
}

export const DialogHeader = ({ userDialog }: Props) => {
  const {
    control,
    handleSubmit,
    handleUpdateDialog,
    isMobile,
    onFiltered,
    onSubmit,
  } = useDialogHeader()

  return (
    <S.DialogHeader>
      {userDialog ? (
        <div className={'dialog-avatar'}>
          {userDialog.photos?.small ? (
            <img src={userDialog.photos.small} alt={'user-photo'} />
          ) : (
            <CircleUserRound size={60} strokeWidth={1} />
          )}
          <p>{userDialog.name}</p>
        </div>
      ) : (
        <div>
          <CircleUserRound size={60} strokeWidth={1} />
          <p>error</p>
        </div>
      )}
      {!isMobile && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormDataPicker
            defaultValue={'2020-01-01'}
            name={'date'}
            control={control}
            label={'Filter messages on date'}
          />
          <Button variant={'primary'}>
            {onFiltered ? 'Reset filter' : 'Filter'}
          </Button>
        </form>
      )}
      <div className={'dialog-update'}>
        {!isMobile && <p>Update dialog</p>}
        <Button onClick={handleUpdateDialog} variant={'icon'}>
          <RefreshCcw />
        </Button>
      </div>
    </S.DialogHeader>
  )
}
