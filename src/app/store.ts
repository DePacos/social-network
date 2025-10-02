import { configureStore } from '@reduxjs/toolkit'

import {
  appReducer,
  authReducer,
  chatReducer,
  dialogsReducer,
  followReducer,
  profileReducer,
  usersReducer,
} from '@/entities/reducers'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    chat: chatReducer,
    dialogs: dialogsReducer,
    follow: followReducer,
    profile: profileReducer,
    users: usersReducer,
  },
})
