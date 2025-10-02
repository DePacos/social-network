import { Button, FormInput, Modal } from '@/shared/ui'

import { useDialog } from '../model'
import { S } from './Dialog.styles'
import { DialogHeader, DialogMessages } from './index'

const Dialog = () => {
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
      <S.WrapDialogMessages datatype="test">
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
        <FormInput control={control} name="message" />
        <Button disabled={!isValid} variant="primary">
          Send
        </Button>
      </S.DialogForm>
      <Modal
        questionConfirmation="Are you sure you want to delete the message?"
        type="confirmation"
        isOpen={modalIsOpen}
        onConfirmation={handleConfirmation}
        setIsOpen={setModalIsOpen}
      />
    </S.Dialog>
  )
}

export default Dialog
