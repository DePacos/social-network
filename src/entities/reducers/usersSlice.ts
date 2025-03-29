import { UsersResponse } from '@/app/types/types'
import { usersAPI } from '@/shared/api/usersAPI'
import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

const initialState = {
  users: { error: '', items: [], totalCount: 0 } as UsersResponse,
}

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: creators => {
    return {
      clearUsers: creators.reducer(state => {
        state.users.items = []
        state.users.totalCount = 0
      }),
      getUsers: creators.asyncThunk(
        async (
          {
            countUsersInPage,
            pageNumber,
            term,
          }: {
            term?: string | undefined
            cleanUsers?: boolean
            countUsersInPage: number
            pageNumber: number
          },
          { rejectWithValue },
        ) => {
          try {
            const res = await usersAPI.fetchUsers(
              pageNumber,
              countUsersInPage,
              term,
            )

            if (res.data.error) {
              return rejectWithValue({
                error: res.data.error,
                type: 'appError',
              })
            }

            return res.data
          } catch (error) {
            return rejectWithValue({
              error: error as AxiosError,
              type: 'catchError',
            })
          }
        },
        {
          fulfilled: (state, action) => {
            const stateUsersIds = state.users.items.map(user => user.id)
            const userId =
              action.payload.items.length > 0 ? action.payload.items[0].id : 0

            if (userId !== 0) {
              if (action.meta.arg.cleanUsers) {
                state.users.items = action.payload.items
              } else {
                if (!stateUsersIds.includes(userId)) {
                  state.users.items = [
                    ...state.users.items,
                    ...action.payload.items,
                  ]
                }
              }
            }
            if (state.users.totalCount !== action.payload.totalCount) {
              state.users.totalCount = action.payload.totalCount
            }
          },
        },
      ),
    }
  },
  selectors: {
    selectUsers: state => state.users,
  },
})

export default usersSlice.reducer
export const { clearUsers, getUsers } = usersSlice.actions
export const { selectUsers } = usersSlice.selectors
