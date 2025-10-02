import { createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import type { AuthInitialState, LoginRequest } from '@/app/types'

import {
  ACTION_TYPES,
  API_RESPONSE,
  ERROR_TYPES,
  REQUEST_STATUS,
  SLICES_NAME,
} from '@/app/constants'
import { createAppAsyncThunk } from '@/app/utils'
import { authAPI } from '@/shared/api/authAPI'
import { profileAPI } from '@/shared/api/profileAPI'

const initialState: AuthInitialState = {
  avatar: '',
  captcha: '',
  authRequest: REQUEST_STATUS.PENDING,
  userId: 0,
}

const authSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.userId = action.payload.data.userId
      state.authRequest = REQUEST_STATUS.FULFILLED
    })
    builder.addCase(getAvatar.fulfilled, (state, action) => {
      state.avatar = action.payload.photos.small
    })
    builder.addCase(me.fulfilled, (state, action) => {
      state.authRequest = REQUEST_STATUS.FULFILLED
      state.userId = action.payload.data.id
    })
    builder.addCase(me.rejected, state => {
      state.authRequest = REQUEST_STATUS.REJECTED
    })
    builder.addCase(logout.fulfilled, state => {
      state.authRequest = REQUEST_STATUS.REJECTED
    })
    builder.addCase(getCaptcha.fulfilled, (state, action) => {
      state.captcha = action.payload.data.url
    })
  },
  initialState,
  name: SLICES_NAME.AUTH_SLICE,
  reducers: {},
  selectors: {
    selectAuthAvatar: state => state.avatar,
    selectAuthCaptcha: state => state.captcha,
    selectAuthRequest: state => state.authRequest,
    selectAuthUserId: state => state.userId,
  },
})

export const signIn = createAppAsyncThunk(
  ACTION_TYPES.SIGN_IN,
  async (loginData: LoginRequest, { dispatch, rejectWithValue }) => {
    try {
      const res = await authAPI.login(loginData)

      if (res.data.resultCode === API_RESPONSE.OTHER_ERROR) {
        dispatch(getCaptcha())

        return rejectWithValue({
          error: res.data,
          type: ERROR_TYPES.APP_ERROR,
        })
      }

      if (res.data.resultCode === API_RESPONSE.ERROR) {
        return rejectWithValue({
          error: res.data,
          type: ERROR_TYPES.APP_ERROR,
        })
      }

      return res.data
    } catch (error) {
      return rejectWithValue({
        error: error as AxiosError,
        type: ERROR_TYPES.CATCH_ERROR,
      })
    }
  },
)

export const me = createAppAsyncThunk(
  ACTION_TYPES.ME,
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await authAPI.me()

      if (res.data.resultCode === API_RESPONSE.ERROR) {
        return rejectWithValue({
          error: res.data,
          type: ERROR_TYPES.APP_ERROR,
        })
      }

      dispatch(getAvatar(res.data.data.id))

      return res.data
    } catch (error) {
      return rejectWithValue({
        error: error as AxiosError,
        type: ERROR_TYPES.CATCH_ERROR,
      })
    }
  },
)

export const logout = createAppAsyncThunk(
  ACTION_TYPES.LOGOUT,
  async (_, { rejectWithValue }) => {
    try {
      const res = await authAPI.logout()

      if (res.data.resultCode === API_RESPONSE.ERROR) {
        return rejectWithValue({
          error: res.data,
          type: ERROR_TYPES.APP_ERROR,
        })
      }

      return res.data
    } catch (error) {
      return rejectWithValue({
        error: error as AxiosError,
        type: ERROR_TYPES.CATCH_ERROR,
      })
    }
  },
)

export const getCaptcha = createAppAsyncThunk(
  ACTION_TYPES.CAPTCHA,
  async (_, { rejectWithValue }) => {
    try {
      return await authAPI.captcha()
    } catch (error) {
      return rejectWithValue({
        error: error as AxiosError,
        type: ERROR_TYPES.CATCH_ERROR,
      })
    }
  },
)

export const getAvatar = createAppAsyncThunk(
  ACTION_TYPES.AVATAR,
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await profileAPI.fetchUserProfile(userId)

      return res.data
    } catch (error) {
      return rejectWithValue({
        error: error as AxiosError,
        type: ERROR_TYPES.CATCH_ERROR,
      })
    }
  },
)

export const {
  selectAuthAvatar,
  selectAuthCaptcha,
  selectAuthRequest,
  selectAuthUserId,
} = authSlice.selectors

export const authReducer = authSlice.reducer
