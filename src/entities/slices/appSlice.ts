import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type {
  AppInitialState,
  AppNotification,
  RejectAppError,
  RejectCatchError,
} from '@/app/types'

import { REQUEST_STATUS, SLICES_NAME } from '@/app/constants'
import { handlerErrors } from '@/app/utils'

const initialState: AppInitialState = {
  isLoading: false,
  appNotifications: { type: null, value: null },
}

const appSlice = createSlice({
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/' + REQUEST_STATUS.PENDING),
      state => {
        state.isLoading = true
      },
    )
    builder.addMatcher(
      action => action.type.endsWith('/' + REQUEST_STATUS.FULFILLED),
      state => {
        state.isLoading = false
      },
    )
    builder.addMatcher(
      action => action.type.endsWith('/' + REQUEST_STATUS.REJECTED),
      (state, action: PayloadAction<RejectAppError | RejectCatchError>) => {
        state.isLoading = false
        state.appNotifications = handlerErrors(action.payload)
      },
    )
  },
  initialState,
  name: SLICES_NAME.APP_SLICE,
  reducers: {
    setNotifications: (state, action: PayloadAction<AppNotification>) => {
      state.appNotifications = action.payload
    },
  },
  selectors: {
    selectAppIsLoading: state => state.isLoading,
    selectAppNotifications: state => state.appNotifications,
  },
})

export const { setNotifications } = appSlice.actions

export const { selectAppIsLoading, selectAppNotifications } = appSlice.selectors

export const appReducer = appSlice.reducer
