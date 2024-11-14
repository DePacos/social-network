import { instance } from "./instance"
import { UserProfile, UsersResponse } from "@/app/types/types"

export const usersAPI = {

  fetchUsers( pageNumber= 1 , countUsersInPage = 10) {
    return instance.get<UsersResponse>(`users?page=${pageNumber}&count=${countUsersInPage}`)
  },
  searchUsers(filter: string) {
    return instance.get<UsersResponse>(`users?term=${filter}`)
  },
  fetchProfile(userId: number) {
    return instance.get<UserProfile>(`profile/${userId}`)
  },
}
