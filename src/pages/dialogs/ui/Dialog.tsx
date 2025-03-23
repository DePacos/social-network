import React from 'react'

import { useDialog } from '@/pages/dialogs/model/useDialog'
import { DialogHeader } from '@/pages/dialogs/ui/DialogHeader'
import { DialogMessages } from '@/pages/dialogs/ui/DialogMessages'
import { Button } from '@/shared/ui/Button/Button'
import { FormInput } from '@/shared/ui/Input/FormInput'
import { Modal } from '@/shared/ui/Modal/Modal'

import { S } from './dialog.styles'

export const Dialog = () => {
  const {
    bottomRef,
    control,
    currentUserId,
    handleConfirmation,
    handleModal,
    handleRestoreMessage,
    handleSpam,
    handleSubmit,
    isValid,
    messages,
    modalIsOpen,
    onSubmit,
    setModalIsOpen,
    userDialog,
  } = useDialog()

  return (
    <S.Dialog>
      <DialogHeader userDialog={userDialog} />
      <S.WrapDialogMessages datatype={'test'}>
        <DialogMessages
          handleSpam={handleSpam}
          messages={messages}
          currentUserId={currentUserId}
          handleModal={handleModal}
          handleRestoreMessage={handleRestoreMessage}
        />
        <div ref={bottomRef} />
      </S.WrapDialogMessages>
      <S.DialogForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput control={control} name={'message'} />
        <Button disabled={!isValid} variant={'primary'}>
          Send
        </Button>
      </S.DialogForm>
      <Modal
        questionConfirmation={'Are you sure you want to delete the message?'}
        type={'confirmation'}
        isOpen={modalIsOpen}
        onConfirmation={handleConfirmation}
        setIsOpen={setModalIsOpen}
      />
    </S.Dialog>
  )
}
