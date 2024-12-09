import { instance } from "@/shared/api/instance"

export const followAPI = {
  fetchFollow(userId: number) {
    return instance.get<boolean>(`/follow/${userId}`)
  },
  setFollow(userId: number) {
    return instance.post(`/follow/${userId}`)
  },
  removeFollow(userId: number) {
    return instance.delete(`/follow/${userId}`)
  },
}