import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ERROR_TYPES, SLICES_NAME } from '@/app/constants'
import { followAPI } from '@/shared/api/followAPI'

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const followSlice = createSlice({
  initialState: {
    follow: false,
  },
  name: SLICES_NAME.FOLLOW_SLICE,
  reducers: creators => {
    return {
      follow: creators.asyncThunk(
        async (userId: number, { rejectWithValue }) => {
          try {
            const res = await followAPI.setFollow(userId)

            if (res.data.resultCode === 1) {
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
        {
          fulfilled: state => {
            state.follow = true
          },
        },
      ),
      getFollow: creators.asyncThunk(
        async (userId: number, { rejectWithValue }) => {
          try {
            const res = await followAPI.fetchFollow(userId)

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
            state.follow = action.payload
          },
        },
      ),
      removeFollow: creators.asyncThunk(
        async (userId: number, { rejectWithValue }) => {
          try {
            const res = await followAPI.removeFollow(userId)

            if (res.data.resultCode === 1) {
              return rejectWithValue({
                error: res.data,
                type: ERROR_TYPES.APP_ERROR,
              })
            }
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: state => {
            state.follow = false
          },
        },
      ),
    }
  },
  selectors: {
    selectFollow: state => state.follow,
  },
})

export const followReducer = followSlice.reducer
export const { follow, getFollow, removeFollow } = followSlice.actions
export const { selectFollow } = followSlice.selectors
