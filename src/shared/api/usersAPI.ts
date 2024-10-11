import { instance } from "./instance"
import { UserProfile, UsersResponse } from "../../app/types/types"

export const usersAPI = {
  fetchUsers( pageNumber= 1 , countUsersInPage = 10) {
    return instance.get<UsersResponse>(`users?page=${pageNumber}&count=${countUsersInPage}`)
  },
  fetchProfile(userId: number) {
    return instance.get<UserProfile>(`profile/${userId}`)
  },
}
