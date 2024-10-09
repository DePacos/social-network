import { instance } from "./instance"
import { AuthResponse, LoginRequest, MeData } from "../../app/types/types"

export const authAPI = {
  me() {
    return instance.get<AuthResponse<MeData>>(`/auth/me`)
  },

  login(data: LoginRequest) {
    return instance.post<AuthResponse<{ userId: string }>>(`/auth/login`, data)
  },

  logout() {
    return instance.delete<AuthResponse<{ userId: string }>>(`/auth/login`)
  },
  captcha() {
    return instance.get<{url: string}>(`/security/get-captcha-url`)
  },
}
