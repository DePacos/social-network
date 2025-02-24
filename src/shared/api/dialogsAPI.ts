import {
  DialogsResponse,
  Message,
  MessagesResponse,
  Response,
} from '@/app/types/types'
import { instance } from '@/shared/api/instance'

export const dialogsAPI = {
  checkViewMessage(messageId: string) {
    return instance.get<boolean>(`dialogs/messages/${messageId}/viewed`)
  },
  deleteMessage(messageId: string) {
    return instance.delete<Response>(`dialogs/messages/${messageId}`)
  },
  fetchDialog() {
    return instance.get<DialogsResponse[]>('dialogs')
  },
  fetchMessages(userId: number) {
    return instance.get<MessagesResponse>(`dialogs/${userId}/messages`)
  },
  fetchMessagesOnDate(userId: number, date: string) {
    return instance.get<Message[]>(
      `dialogs/${userId}/messages/new?newerThen=${date}`,
    )
  },
  fetchNewMessages() {
    return instance.get<number>(`dialogs/messages/new/count`)
  },
  isSpamMessage(messageId: string) {
    return instance.post<Response>(`dialogs/messages/${messageId}/spam`)
  },
  refreshDialog(userId: number) {
    return instance.put<Response>(`dialogs/${userId}`)
  },
  restoreMessage(messageId: string) {
    return instance.put<Response>(`dialogs/messages/${messageId}/restore`)
  },
  sendDialogMessage(userId: number, data: string) {
    return instance.post<Response<Message>>(`dialogs/${userId}/messages`, {
      body: data,
    })
  },
}
