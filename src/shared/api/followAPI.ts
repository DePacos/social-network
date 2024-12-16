import { instance } from "@/shared/api/instance"
import { Response } from "@/app/types/types"

export const followAPI = {
  fetchFollow(userId: number) {
    return instance.get<boolean>(`/follow/${userId}`)
  },
  setFollow(userId: number) {
    return instance.post<Response>(`/follow/${userId}`)
  },
  removeFollow(userId: number) {
    return instance.delete<Response>(`/follow/${userId}`)
  },
}