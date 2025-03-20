import appReducer from '@/entities/reducers/appSlice'
import authReducer from '@/entities/reducers/authSlice'
import dialogsReducer from '@/entities/reducers/dialogSlice'
import followReducer from '@/entities/reducers/followSlice'
import profileReducer from '@/entities/reducers/profileSlice'
import usersReducer from '@/entities/reducers/usersSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    dialogs: dialogsReducer,
    follow: followReducer,
    profile: profileReducer,
    users: usersReducer,
  },
})
