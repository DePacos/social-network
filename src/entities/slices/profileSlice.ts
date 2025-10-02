import type { UserProfileRequest, UserProfileResponse } from 'src/app/types'

import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { API_RESPONSE, ERROR_TYPES, SLICES_NAME } from '@/app/constants'
import { profileAPI } from '@/shared/api/profileAPI'

const initialState: UserProfileResponse & { status: string } = {
  aboutMe: '',
  contacts: {
    facebook: '',
    github: '',
    instagram: '',
    mainLink: '',
    twitter: '',
    vk: '',
    website: '',
    youtube: '',
  },
  fullName: '',
  lookingForAJob: false,
  lookingForAJobDescription: '',
  photos: { large: '', small: '' },
  status: '',
  userId: 0,
}

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const profileSlice = createSlice({
  initialState,
  name: SLICES_NAME.PROFILE_SLICE,
  reducers: creators => {
    return {
      editUserPhoto: creators.asyncThunk(
        async (photo: FormData, { rejectWithValue }) => {
          try {
            const res = await profileAPI.editUserPhoto(photo)

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
        {
          fulfilled: (state, action) => {
            state.photos = action.payload.data.photos
          },
        },
      ),
      editUserProfile: creators.asyncThunk(
        async (data: UserProfileRequest, { rejectWithValue }) => {
          try {
            const res = await profileAPI.editUserProfile(data)

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
        {
          fulfilled: (state, action) => {
            state.aboutMe = action.meta.arg.aboutMe
            state.lookingForAJob = action.meta.arg.lookingForAJob
            state.lookingForAJobDescription =
              action.meta.arg.lookingForAJobDescription
            state.fullName = action.meta.arg.fullName
            state.contacts = { ...action.meta.arg.contacts }
          },
        },
      ),
      editUserStatus: creators.asyncThunk(
        async (data: { status: string }, { rejectWithValue }) => {
          try {
            const res = await profileAPI.editUserStatus(data)

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
          fulfilled: (state, action) => {
            state.status = action.meta.arg.status
          },
        },
      ),
      getUserProfile: creators.asyncThunk(
        async (userId: number, { rejectWithValue }) => {
          try {
            const resProfile = await profileAPI.fetchUserProfile(userId)
            const resStatus = await profileAPI.fetchUserStatus(userId)

            return { ...resProfile.data, status: resStatus.data }
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: ERROR_TYPES.CATCH_ERROR,
            })
          }
        },
        {
          fulfilled: (state, action) => {
            Object.assign(state, action.payload)
          },
        },
      ),
    }
  },
  selectors: {
    selectProfile: state => state,
  },
})

export const profileReducer = profileSlice.reducer
export const {
  editUserPhoto,
  editUserProfile,
  editUserStatus,
  getUserProfile,
} = profileSlice.actions

export const { selectProfile } = profileSlice.selectors
