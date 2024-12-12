import { instance } from "./instance"
import { UserStatus } from "@/app/types/types"

export const userStatusAPI = {
  fetchUserStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
  },
  editUserStatus(data: UserStatus) {
    return instance.put<Response>(`profile/status`, {status: data})
  },
}
