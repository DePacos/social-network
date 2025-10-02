import type { Control, FieldValues, Path } from 'react-hook-form'

import { AxiosError } from 'axios'

import { ERROR_TYPES, REQUEST_STATUS, SOCKET_STATUS } from '@/app/constants'

import { store } from '../store'

export type AuthInitialState = {
  avatar: string
  captcha: string
  authRequest: AuthRequest
  userId: number
}

type AuthRequest = (typeof REQUEST_STATUS)[keyof typeof REQUEST_STATUS]

export type AppNotification = {
  value: string | null
  type: ErrorType
}

type ErrorType = (typeof ERROR_TYPES)[keyof typeof ERROR_TYPES] | null

export type AppInitialState = {
  isInitialized: boolean
  isLoading: boolean
  appNotifications: AppNotification
}

export type ChatInitialState = {
  messages: ChatMessage[]
  status: SocketStatus
}

type SocketStatus = (typeof SOCKET_STATUS)[keyof typeof SOCKET_STATUS]

export type Photos = {
  small: string
  large: string
}

export type Contacts = {
  github?: string
  vk?: string
  facebook?: string
  instagram?: string
  twitter?: string
  website?: string
  youtube?: string
  mainLink?: string
}

export type UserProfileResponse = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: Contacts
  photos: Photos
  aboutMe: string
}

export type UserProfileRequest = {
  userId?: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts?: Contacts
  aboutMe: string
}

export type DialogsInitialState = {
  dialogs: DialogsResponse[]
  messages: Message[]
  newMessages: number
  userDialog: UserDialog
}

export type DialogsResponse = {
  id: number
  userName: string
  hasNewMessages: false
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos: Photos
}

export type UserDialog = {
  id: number
  name: string
  photos: Photos
}

export type MessageOnDate = {
  recipientName: string
  deletedBySender: boolean
  deletedByRecipient: boolean
  isSpam: boolean
  distributionId: null
} & Message

export type Message = {
  id: string
  body: string
  translatedBody: null
  addedAt: string
  senderId: number
  senderName: string
  recipientId: number
  viewed: boolean
  removed?: boolean | undefined
}

export type MessagesResponse = {
  items: Message[]
  totalCount: number
  error: null
}

export type User = {
  id: number
  name: string
  photos: Photos
  status: string
  followed: boolean
  uniqueUrlName: string
}

export type UsersResponse = {
  items: User[]
  totalCount: number
  error: string
}

export type Page = {
  currentPage: number
  pageItems: number
  paginationData: number[]
}

export type MeData = {
  id: number
  email: string
  login: string
}

export type LoginRequest = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}

export type FieldErrorType = {
  field: string
  error: string
}

export type Response<D = {}> = {
  resultCode: number
  messages: string[]
  fieldsErrors?: FieldErrorType[]
  data: D
}

export type RejectAppError = {
  error: Response
  type: 'appError'
}

export type RejectCatchError = {
  error: AxiosError
  type: 'catchError'
}

export type FormField<T extends FieldValues> = {
  rules?: Record<string, unknown>
  control: Control<T>
  name: Path<T>
  error?: string
}

export type InputTypes = 'text' | 'number' | 'password' | 'email' | 'search'

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ChatMessage = {
  message: string
  photo: string
  userId: number
  userName: string
}
