import {
  asyncThunkCreator,
  buildCreateSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import type { ChatInitialState, ChatMessage } from '@/app/types'

import { ERROR_TYPES, SLICES_NAME, SOCKET_STATUS } from '@/app/constants'
import { connectToSocket } from '@/app/utils'

let socket: WebSocket | null = null

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const chatInitialState: ChatInitialState = {
  messages: [],
  status: SOCKET_STATUS.DISCONNECTED,
}

const chatSlice = createSlice({
  initialState: chatInitialState,
  name: SLICES_NAME.CHAT_SLICE,
  reducers: creators => {
    return {
      connectToWebsocket: creators.asyncThunk(
        async (_, { dispatch, rejectWithValue }) => {
          try {
            socket = await connectToSocket()
          } catch (error) {
            return rejectWithValue({
              error: { message: error },
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }

          try {
            socket.onmessage = event => {
              const message: ChatMessage[] = JSON.parse(event.data)
              dispatch(setMessages(message))
            }
          } catch {
            return rejectWithValue({
              error: { message: 'error getting message' },
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: state => {
            state.status = SOCKET_STATUS.CONNECTED
          },
        },
      ),

      disconnectWebsocket: creators.reducer(state => {
        if (!socket) return

        socket.close()
        socket = null
        state.status = SOCKET_STATUS.DISCONNECTED
        state.messages = []
      }),

      sendMessage: creators.reducer((_, action: PayloadAction<string>) => {
        if (!socket) return

        socket.send(
          JSON.stringify({
            message: action.payload,
          }),
        )
      }),

      setMessages: creators.reducer(
        (state, action: PayloadAction<ChatMessage[]>) => {
          state.messages = [...state.messages, ...action.payload]
        },
      ),
    }
  },
  selectors: {
    selectChatMessages: state => state.messages,
    selectChatStatus: state => state.status,
  },
})

export const chatReducer = chatSlice.reducer

export const {
  connectToWebsocket,
  disconnectWebsocket,
  sendMessage,
  setMessages,
} = chatSlice.actions

export const { selectChatMessages, selectChatStatus } = chatSlice.selectors
