import { followAPI } from '@/shared/api/followAPI'
import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const followSlice = createSlice({
  initialState: {
    follow: false,
  },
  name: 'follow',
  reducers: creators => {
    return {
      follow: creators.asyncThunk(
        async (userId: number, { rejectWithValue }) => {
          try {
            const res = await followAPI.setFollow(userId)

            if (res.data.resultCode === 1) {
              return rejectWithValue({
                error: res.data,
                type: 'appError',
              })
            }

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: 'catchError',
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
              type: 'catchError',
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
                type: 'appError',
              })
            }
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: 'catchError',
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

export default followSlice.reducer
export const { follow, getFollow, removeFollow } = followSlice.actions
export const { selectFollow } = followSlice.selectors
