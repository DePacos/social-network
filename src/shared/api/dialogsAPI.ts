import type {
  DialogsResponse,
  Message,
  MessagesResponse,
  Response,
} from '@/app/types'

import { API_ENDPOINTS } from '@/app/constants'
import { instance } from '@/shared/api/instance'

export const dialogsAPI = {
  checkViewMessage(messageId: string) {
    return instance.get<boolean>(API_ENDPOINTS.DIALOGS.CHECK_MESSAGE(messageId))
  },
  deleteMessage(messageId: string) {
    return instance.delete<Response>(
      API_ENDPOINTS.DIALOGS.DELETE_MESSAGE(messageId),
    )
  },
  fetchDialog() {
    return instance.get<DialogsResponse[]>(API_ENDPOINTS.DIALOGS.FETCH_DIALOGS)
  },
  fetchMessages(userId: number) {
    return instance.get<MessagesResponse>(
      API_ENDPOINTS.DIALOGS.FETCH_MESSAGES(userId),
    )
  },
  fetchMessagesOnDate(userId: number, date: string) {
    return instance.get<Message[]>(
      API_ENDPOINTS.DIALOGS.FETCH_MESSAGES_DATE(userId, date),
    )
  },
  fetchNewMessages() {
    return instance.get<number>(API_ENDPOINTS.DIALOGS.FETCH_NEW_MESSAGES)
  },
  setSpamMessage(messageId: string) {
    return instance.post<Response>(
      API_ENDPOINTS.DIALOGS.SPAM_MESSAGE(messageId),
    )
  },
  refreshDialog(userId: number) {
    return instance.put<Response>(API_ENDPOINTS.DIALOGS.REFRESH_DIALOG(userId))
  },
  restoreMessage(messageId: string) {
    return instance.put<Response>(
      API_ENDPOINTS.DIALOGS.RESTORE_MESSAGE(messageId),
    )
  },
  sentDialogMessage(userId: number, data: string) {
    return instance.post<Response<Message>>(
      API_ENDPOINTS.DIALOGS.SENT_MESSAGES(userId),
      {
        body: data,
      },
    )
  },
}
