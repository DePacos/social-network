import { instance } from "./instance"
import { UserProfile, User, UsersResponse } from "../../app/types/types"

export const usersAPI = {
  fetchUsers(pageNumber: number = 1) {
    return instance.get<UsersResponse>(`users?page=${pageNumber}&count=${10}`)
  },
  fetchProfile(userId: number) {
    return instance.get<UserProfile>(`profile/${userId}`)
  },
}
