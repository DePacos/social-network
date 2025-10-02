import type {
  Photos,
  Response,
  UserProfileRequest,
  UserProfileResponse,
} from '@/app/types'

import { API_ENDPOINTS } from '@/app/constants'

import { instance } from './instance'

export const profileAPI = {
  editUserPhoto(data: FormData) {
    return instance.put<Response<{ photos: Photos }>>(
      API_ENDPOINTS.PROFILE.EDIT_PROFILE_PHOTO,
      data,
    )
  },
  editUserProfile(data: UserProfileRequest) {
    return instance.put<Response<UserProfileResponse>>(
      API_ENDPOINTS.PROFILE.EDIT_PROFILE,
      data,
    )
  },
  editUserStatus(data: { status: string }) {
    return instance.put<Response<{ status: string }>>(
      API_ENDPOINTS.PROFILE.EDIT_PROFILE_STATUS,
      data,
    )
  },
  fetchUserProfile(userId: number) {
    return instance.get<UserProfileResponse>(
      API_ENDPOINTS.PROFILE.FETCH_PROFILE(userId),
    )
  },
  fetchUserStatus(userId: number) {
    return instance.get<Response<string>>(
      API_ENDPOINTS.PROFILE.FETCH_PROFILE_STATUS(userId),
    )
  },
}
