import { AuthInitialState, LoginRequest } from '@/app/types/types'
import { createAppAsyncThunk } from '@/app/utils/createAppAsyncThunk'
import { authAPI } from '@/shared/api/authAPI'
import { profileAPI } from '@/shared/api/profileAPI'
import { createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const initialState: AuthInitialState = {
  avatar: '',
  captcha: '',
  isLoggedIn: true,
  userId: 0,
}

export const authSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.userId = action.payload.data.userId
      state.isLoggedIn = true
    })
    builder.addCase(getAvatar.fulfilled, (state, action) => {
      state.avatar = action.payload.photos.small
    })
    builder.addCase(me.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.userId = action.payload.data.id
    })
    builder.addCase(me.rejected, state => {
      state.isLoggedIn = false
    })
    builder.addCase(logout.fulfilled, state => {
      state.isLoggedIn = false
    })
    builder.addCase(getCaptcha.fulfilled, (state, action) => {
      state.captcha = action.payload.data.url
    })
  },
  initialState,
  name: 'auth',
  reducers: {},
  selectors: {
    selectAuthAvatar: state => state.avatar,
    selectAuthCaptcha: state => state.captcha,
    selectAuthIsLoggedIn: state => state.isLoggedIn,
    selectAuthUserId: state => state.userId,
  },
})

export const signIn = createAppAsyncThunk(
  'auth/signIn',
  async (loginData: LoginRequest, { dispatch, rejectWithValue }) => {
    try {
      const res = await authAPI.login(loginData)

      if (res.data.resultCode === 10) {
        dispatch(getCaptcha())

        return rejectWithValue({
          error: res.data,
          type: 'appError',
        })
      }

      if (res.data.resultCode === 1) {
        return rejectWithValue({
          error: res.data,
          type: 'appError',
        })
      }

      return res.data
    } catch (error) {
      return rejectWithValue({ error: error as AxiosError, type: 'catchError' })
    }
  },
)

export const me = createAppAsyncThunk(
  'auth/me',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await authAPI.me()

      if (res.data.resultCode === 1) {
        return rejectWithValue({
          error: res.data,
          type: 'appError',
        })
      }

      dispatch(getAvatar(res.data.data.id))

      return res.data
    } catch (error) {
      return rejectWithValue({ error: error as AxiosError, type: 'catchError' })
    }
  },
)

export const logout = createAppAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await authAPI.logout()

      if (res.data.resultCode === 1) {
        return rejectWithValue({
          error: res.data,
          type: 'appError',
        })
      }

      return res.data
    } catch (error) {
      return rejectWithValue({ error: error as AxiosError, type: 'catchError' })
    }
  },
)

export const getCaptcha = createAppAsyncThunk(
  'auth/captcha',
  async (_, { rejectWithValue }) => {
    try {
      return await authAPI.captcha()
    } catch (error) {
      return rejectWithValue({ error: error as AxiosError, type: 'catchError' })
    }
  },
)

export const getAvatar = createAppAsyncThunk(
  'auth/avatar',
  async (userId: number, { rejectWithValue }) => {
    try {
      const res = await profileAPI.fetchUserProfile(userId)

      return res.data
    } catch (error) {
      return rejectWithValue({ error: error as AxiosError, type: 'catchError' })
    }
  },
)

export const {
  selectAuthAvatar,
  selectAuthCaptcha,
  selectAuthIsLoggedIn,
  selectAuthUserId,
} = authSlice.selectors

export default authSlice.reducer
