import { instance } from "./instance"
import { AuthResponse, Login, MeData } from "../../app/types/types"

export const authAPI = {
  me() {
    return instance.get<AuthResponse<MeData>>(`/auth/me`)
  },

  login(data: Login) {
    return instance.post<AuthResponse<{ userId: string }>>(`/auth/login`, data)
  },

  logout() {
    return instance.delete<AuthResponse<{ userId: string }>>(`/auth/login`)
  },
}
