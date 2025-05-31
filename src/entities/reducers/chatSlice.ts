import { connectToSocket } from '@/app/utils/chatSocket'
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

type ChatMessage = {
  message: string
  photo: string
  userId: number
  userName: string
}

let socket: WebSocket | string

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const chatSlice = createSlice({
  initialState: {
    error: null as string | null,
    messages: [] as ChatMessage[],
    status: 'disconnected' as 'connected' | 'disconnected',
  },
  name: 'chat',
  reducers: creators => {
    return {
      connectToWebsocket: creators.asyncThunk(
        async (_, { dispatch, rejectWithValue }) => {
          socket = await connectToSocket()
          if (typeof socket !== 'string') {
            socket.onmessage = event => {
              const message: ChatMessage[] = JSON.parse(event.data)

              dispatch(setMessages(message))
            }
          } else {
            return rejectWithValue({
              error: socket,
              type: 'catchError',
            })
          }
        },
        {
          fulfilled: state => {
            state.status = 'connected'
          },
        },
      ),

      disconnectWebsocket: creators.reducer(state => {
        if (typeof socket !== 'string') {
          socket.close()
          state.status = 'disconnected'
        } else {
          state.error = 'error socket closed'
        }
      }),

      sendMessage: creators.reducer((state, action: PayloadAction<string>) => {
        if (typeof socket !== 'string') {
          socket.send(
            JSON.stringify({
              message: action.payload,
            }),
          )
        } else {
          state.error = 'send message error'
        }
      }),

      setMessages: creators.reducer(
        (state, action: PayloadAction<ChatMessage[]>) => {
          state.messages = [...state.messages, ...action.payload]
          state.error = null
        },
      ),
    }
  },
  selectors: {
    selectChatError: state => state.error,
    selectChatMessages: state => state.messages,
    selectChatStatus: state => state.status,
  },
})

export default chatSlice.reducer
export const {
  connectToWebsocket,
  disconnectWebsocket,
  sendMessage,
  setMessages,
} = chatSlice.actions
export const { selectChatError, selectChatMessages, selectChatStatus } =
  chatSlice.selectors
