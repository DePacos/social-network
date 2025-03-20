import { Response } from '@/app/types/types'

import { instance } from './instance'

export const followAPI = {
  fetchFollow(userId: number) {
    return instance.get<boolean>(`/follow/${userId}`)
  },
  removeFollow(userId: number) {
    return instance.delete<Response>(`/follow/${userId}`)
  },
  setFollow(userId: number) {
    return instance.post<Response>(`/follow/${userId}`)
  },
}
