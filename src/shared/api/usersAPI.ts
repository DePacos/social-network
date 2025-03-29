import { UsersResponse } from '@/app/types/types'

import { instance } from './instance'

export const usersAPI = {
  fetchUsers(pageNumber: number, countUsersInPage: number, param = '') {
    return instance.get<UsersResponse>(
      `users?page=${pageNumber}&count=${countUsersInPage}&term=${param}`,
    )
  },
}
