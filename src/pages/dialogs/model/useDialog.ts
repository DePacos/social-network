import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/hooks/useStateHook'
import { Message } from '@/app/types/types'
import { selectAuthUserId } from '@/entities/reducers/authSlice'
import {
  deleteMessage,
  fetchMessages,
  restoreMessage,
  selectDialogMessages,
  selectUserDialog,
  sendDialogMessage,
  setMessageIsSpam,
} from '@/entities/reducers/dialogSlice'
import {
  createSendMessageSchema,
  SendMessage,
} from '@/shared/schemas/sendMessage.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useDialog = () => {
  const currentUserId = useAppSelector(selectAuthUserId)
  const messages = useAppSelector(selectDialogMessages)
  const userDialog = useAppSelector(selectUserDialog)

  const dispatch = useAppDispatch()
  const { id: paramId } = useParams()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [deletedMessage, setDeletedMessage] = useState<Message | null>(null)

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<SendMessage>({
    defaultValues: {
      message: '',
    },
    mode: 'onChange',
    resolver: zodResolver(createSendMessageSchema()),
  })

  const bottomRef = useRef<HTMLDivElement>(null)

  const onSubmit = (data: SendMessage) => {
    dispatch(sendDialogMessage({ data: data.message, userId: Number(paramId) }))
  }

  const handleModal = async (message: Message) => {
    setModalIsOpen(true)
    setDeletedMessage(message)
  }

  const handleConfirmation = async () => {
    if (deletedMessage) {
      dispatch(deleteMessage(deletedMessage))
    }
  }

  const handleRestoreMessage = (messageId: string) => {
    dispatch(restoreMessage(messageId))
  }

  const handleSpam = (messageId: string) => {
    dispatch(setMessageIsSpam(messageId))
  }

  useEffect(() => {
    dispatch(fetchMessages(Number(paramId)))
  }, [paramId])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return {
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
    paramId,
    setModalIsOpen,
    userDialog,
  }
}
