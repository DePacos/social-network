import { instance } from "./instance"
import { UsersResponse } from "@/app/types/types"

export const profileAPI = {

  fetchUsers(pageNumber = 1, countUsersInPage = 10) {
    return instance.get<UsersResponse>(`users?page=${pageNumber}&count=${countUsersInPage}`)
  },
  searchUsers(filter: string) {
    return instance.get<UsersResponse>(`users?term=${filter}`)
  }
}