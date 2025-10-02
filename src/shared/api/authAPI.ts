import type { LoginRequest, MeData, Response } from '@/app/types'

import { API_ENDPOINTS } from '@/app/constants'

import { instance } from './instance'

export const authAPI = {
  captcha() {
    return instance.get<{ url: string }>(API_ENDPOINTS.AUTH.CAPTCHA)
  },

  login(data: LoginRequest) {
    return instance.post<Response<{ userId: number }>>(
      API_ENDPOINTS.AUTH.LOGIN,
      data,
    )
  },

  logout() {
    return instance.delete<Response>(API_ENDPOINTS.AUTH.LOGIN)
  },
  me() {
    return instance.get<Response<MeData>>(API_ENDPOINTS.AUTH.ME)
  },
}
