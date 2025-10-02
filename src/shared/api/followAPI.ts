import type { Response } from '@/app/types'

import { API_ENDPOINTS } from '@/app/constants'

import { instance } from './instance'

export const followAPI = {
  fetchFollow(userId: number) {
    return instance.get<boolean>(API_ENDPOINTS.FOLLOW(userId))
  },
  removeFollow(userId: number) {
    return instance.delete<Response>(API_ENDPOINTS.FOLLOW(userId))
  },
  setFollow(userId: number) {
    return instance.post<Response>(API_ENDPOINTS.FOLLOW(userId))
  },
}
