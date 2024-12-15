import { instance } from "./instance"
import { Response, LoginRequest, MeData } from "@/app/types/types"

export const authAPI = {
  me() {
    return instance.get<Response<MeData>>(`/auth/me`)
  },

  login(data: LoginRequest) {
    return instance.post<Response<{userId: number}>>(`/auth/login`, data)
  },

  logout() {
    return instance.delete<Response>(`/auth/login`)
  },
  captcha() {
    return instance.get<{url: string}>(`/security/get-captcha-url`)
  },
}
