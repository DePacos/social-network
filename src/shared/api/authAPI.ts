import { Response, LoginRequest, MeData } from '@/app/types/types'

import { instance } from './instance'

export const authAPI = {
  captcha() {
    return instance.get<{ url: string }>(`/security/get-captcha-url`)
  },

  login(data: LoginRequest) {
    return instance.post<Response<{ userId: number }>>(`/auth/login`, data)
  },

  logout() {
    return instance.delete<Response>(`/auth/login`)
  },
  me() {
    return instance.get<Response<MeData>>(`/auth/me`)
  },
}
