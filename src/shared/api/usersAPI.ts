import type { UsersResponse } from '@/app/types'

import { API_ENDPOINTS } from '@/app/constants'

import { instance } from './instance'

export const usersAPI = {
  fetchUsers(pageNumber: number, countUsersInPage: number, param = '') {
    return instance.get<UsersResponse>(
      API_ENDPOINTS.USERS(pageNumber, countUsersInPage, param),
    )
  },
}
