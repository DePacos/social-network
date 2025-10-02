import { CircleUserRound, RefreshCcw } from 'lucide-react'

import { type UserDialog } from '@/app/types'
import { Button, FormDataPicker } from '@/shared/ui'

import { useDialogHeader } from '../model'
import { S } from './Dialog.styles.ts'

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
        <div className="dialog-avatar">
          {userDialog.photos?.small ? (
            <img src={userDialog.photos.small} alt="user-photo" />
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
            defaultValue="2020-01-01"
            name="date"
            control={control}
            label="Filter messages on date"
          />
          <Button variant="primary">
            {onFiltered ? 'Reset filter' : 'Filter'}
          </Button>
        </form>
      )}
      <div className="dialog-update">
        {!isMobile && <p>Update dialog</p>}
        <Button onClick={handleUpdateDialog} variant="icon">
          <RefreshCcw />
        </Button>
      </div>
    </S.DialogHeader>
  )
}
