import {
  Photos,
  Response,
  UserProfileRequest,
  UserProfileResponse,
} from '@/app/types/types'

import { instance } from './instance'

export const profileAPI = {
  editUserPhoto(data: FormData) {
    return instance.put<Response<{ photos: Photos }>>(`profile/photo`, data)
  },
  editUserProfile(data: UserProfileRequest) {
    return instance.put<Response<UserProfileResponse>>(`profile/`, data)
  },
  editUserStatus(data: { status: string }) {
    return instance.put<Response<{ status: string }>>(`profile/status/`, data)
  },
  fetchUserProfile(userId: number) {
    return instance.get<UserProfileResponse>(`profile/${userId}`)
  },
  fetchUserStatus(userId: number) {
    return instance.get<Response<string>>(`profile/status/${userId}`)
  },
}
