import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  connectToWebsocket,
  disconnectWebsocket,
  sendMessage,
} from '@/entities/actions'
import {
  selectAppNotifications,
  selectChatMessages,
} from '@/entities/selectors'
import {
  createSendMessageSchema,
  type SendMessage,
} from '@/shared/schemas/sendMessage.schema'

export const useChat = () => {
  const dispatch = useAppDispatch()
  const messages = useAppSelector(selectChatMessages)
  const appNotification = useAppSelector(selectAppNotifications)

  const onSubmit = (data: SendMessage) => {
    dispatch(sendMessage(data.message))
  }

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<SendMessage>({
    defaultValues: { message: '' },
    mode: 'onChange',
    resolver: zodResolver(createSendMessageSchema()),
  })

  useEffect(() => {
    dispatch(connectToWebsocket())

    return () => {
      dispatch(disconnectWebsocket())
    }
  }, [])

  return {
    appNotification,
    control,
    handleSubmit,
    isValid,
    messages,
    onSubmit,
  }
}
