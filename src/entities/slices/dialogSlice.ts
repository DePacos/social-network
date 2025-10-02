import {
  asyncThunkCreator,
  buildCreateSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import type {
  DialogsInitialState,
  Message,
  Photos,
  UserDialog,
} from '@/app/types'

import { ERROR_TYPES, SLICES_NAME } from '@/app/constants'
import {
  getMessagesByRecipient,
  removeRemovedMessage,
  saveDeletedMessage,
} from '@/app/utils'
import { setNotifications } from '@/entities/slices/appSlice'
import { dialogsAPI } from '@/shared/api/dialogsAPI'

const initialState: DialogsInitialState = {
  dialogs: [],
  messages: [],
  newMessages: 0,
  userDialog: { id: 0, name: '', photos: {} as Photos },
}

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const dialogsSlice = createSlice({
  initialState,
  name: SLICES_NAME.DIALOGS_SLICE,
  reducers: creators => {
    return {
      deleteMessage: creators.asyncThunk(
        async (message: Message, { rejectWithValue }) => {
          try {
            await dialogsAPI.deleteMessage(message.id)
            const resIndexDb = await saveDeletedMessage(message)

            return resIndexDb && typeof resIndexDb !== 'string'
              ? { messageSaved: true }
              : { messageSaved: false }
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.messages = action.payload.messageSaved
              ? state.messages.map(message =>
                  message.id === action.meta.arg.id
                    ? { ...message, removed: true }
                    : message,
                )
              : state.messages.filter(
                  message => message.id !== action.meta.arg.id,
                )
          },
        },
      ),
      fetchDialogs: creators.asyncThunk(
        async (_, { rejectWithValue }) => {
          try {
            const res = await dialogsAPI.fetchDialog()

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.dialogs = [...action.payload]
          },
        },
      ),
      fetchMessages: creators.asyncThunk(
        async (userId: number, { dispatch, rejectWithValue }) => {
          try {
            const res = await dialogsAPI.fetchMessages(userId)
            const resIndexDb = await getMessagesByRecipient(userId)

            if (resIndexDb.length > 0 && typeof resIndexDb !== 'string') {
              const updatedMessages: Message[] = [
                ...resIndexDb,
                ...res.data.items,
              ].sort(
                (a, b) =>
                  new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime(),
              )

              return { items: updatedMessages }
            } else {
              dispatch(
                setNotifications({
                  type: ERROR_TYPES.CATCH_ERROR,
                  value: resIndexDb as string,
                }),
              )
            }

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.messages = [...action.payload.items]
          },
        },
      ),
      filterDialogMessages: creators.asyncThunk(
        async (
          { date, userId }: { date: string; userId: number },
          { rejectWithValue },
        ) => {
          try {
            const res = await dialogsAPI.fetchMessagesOnDate(userId, date)

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.messages = [...action.payload]
          },
        },
      ),
      getNewMessages: creators.asyncThunk(
        async (_, { rejectWithValue }) => {
          try {
            const res = await dialogsAPI.fetchNewMessages()

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.newMessages = action.payload
          },
        },
      ),
      refreshDialogs: creators.asyncThunk(
        async (userId: number, { rejectWithValue }) => {
          try {
            const res = await dialogsAPI.refreshDialog(userId)

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            const userId = action.meta.arg
            const updateDialog = state.dialogs.filter(
              dialog => dialog.id === userId,
            )
            const otherDialogs = state.dialogs.filter(
              dialog => dialog.id !== userId,
            )

            state.dialogs = [...updateDialog, ...otherDialogs]
          },
        },
      ),
      restoreMessage: creators.asyncThunk(
        async (messageId: string, { rejectWithValue }) => {
          try {
            await dialogsAPI.restoreMessage(messageId)
            await removeRemovedMessage(messageId)
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.messages = state.messages.map(message =>
              message.id === action.meta.arg
                ? { ...message, removed: false }
                : message,
            )
          },
        },
      ),
      sentDialogMessage: creators.asyncThunk(
        async (
          { data, userId }: { userId: number; data: string },
          { rejectWithValue },
        ) => {
          try {
            const res = await dialogsAPI.sentDialogMessage(userId, data)

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.messages = [...state.messages, action.payload.data]
          },
        },
      ),
      setMessageIsSpam: creators.asyncThunk(
        async (messageId: string, { rejectWithValue }) => {
          try {
            const res = await dialogsAPI.setSpamMessage(messageId)

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            state.messages = state.messages.filter(
              message => message.id !== action.meta.arg,
            )
          },
        },
      ),
      setUserDialog: creators.reducer(
        (state, action: PayloadAction<UserDialog>) => {
          state.userDialog = action.payload
        },
      ),
    }
  },
  selectors: {
    selectDialogMessages: state => state.messages,
    selectDialogs: state => state.dialogs,
    selectDialogsNewMessages: state => state.newMessages,
    selectUserDialog: state => state.userDialog,
  },
})

export const dialogsReducer = dialogsSlice.reducer
export const {
  deleteMessage,
  fetchDialogs,
  fetchMessages,
  filterDialogMessages,
  getNewMessages,
  refreshDialogs,
  restoreMessage,
  sendDialogMessage,
  setMessageIsSpam,
  setUserDialog,
} = dialogsSlice.actions

export const {
  selectDialogMessages,
  selectDialogs,
  selectDialogsNewMessages,
  selectUserDialog,
} = dialogsSlice.selectors
