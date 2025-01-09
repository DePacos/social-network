import {
  AppInitialState,
  AppNotification,
  RejectAppError,
  RejectCatchError,
} from '@/app/types/types'
import { handlerErrors } from '@/app/utils/handlerErrors'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AppInitialState = {
  isInitialized: true,
  isLoading: false,
  notifications: { type: null, value: null },
}

const appSlice = createSlice({
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      (state, action) => {
        state.isLoading = true
        if (action.type === 'auth/me/pending') {
          state.isInitialized = false
        }
      },
    )
    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      state => {
        state.isLoading = false
        state.isInitialized = true
      },
    )
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action: PayloadAction<RejectAppError | RejectCatchError>) => {
        state.isLoading = false
        state.isInitialized = true
        state.notifications = handlerErrors(action.payload)
      },
    )
  },
  initialState,
  name: 'app',
  reducers: {
    setNotifications: (state, action: PayloadAction<AppNotification>) => {
      state.notifications = action.payload
    },
  },
  selectors: {
    selectAppIsInitialized: state => state.isInitialized,
    selectAppIsLoading: state => state.isLoading,
    selectAppNotifications: state => state.notifications,
  },
})

export const { setNotifications } = appSlice.actions

export const {
  selectAppIsInitialized,
  selectAppIsLoading,
  selectAppNotifications,
} = appSlice.selectors

export default appSlice.reducer
