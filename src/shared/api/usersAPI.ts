import { instance } from "./instance"
import { UsersResponse } from "../../app/types/types"

export const usersAPI = {
  fetchUsers(pageNumber: number = 1) {
    return instance.get<UsersResponse>(`users?page=${pageNumber}&count=${10}`)
  },
}
