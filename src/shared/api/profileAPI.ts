import { instance } from "./instance"
import { AuthResponse, Photos, UserProfile, UserStatus } from "@/app/types/types"

export const profileAPI = {
  fetchProfile(userId: number) {
    return instance.get<UserProfile>(`profile/${userId}`)
  },
  editProfile(data: UserProfile) {
    return instance.put<AuthResponse>(`profile/`, data)
  },
  setProfilePhoto(data: Photos) {
    return instance.put<AuthResponse<Photos>>(`profile/photo`, data)
  },
  fetchProfileStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  setProfileStatus(data: UserStatus) {
    return instance.put(`profile/status`, data)
  },
}
