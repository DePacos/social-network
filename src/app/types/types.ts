import {
  changePageItems,
  changePagination,
  setPage,
  setUsers,
} from "../../entities/users/usersReducer"
import { rootReducer, store } from "../store"
import { ThunkDispatch } from "redux-thunk"

type Photos = {
  small: string
  large: string
}

export type User = {
  id: number
  name: string
  photos: Photos
  status: string
  followed: boolean
  body: string
  img: string
  uniqueUrlName: string
}

export type UsersResponse = {
  items: User[]
  totalCount: number
  error: string
}

export type Page = {
  currentPage: number
  pageItems: number
  paginationData: number[]
}

export type UsersActions =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof changePagination>
  | ReturnType<typeof setPage>
  | ReturnType<typeof changePageItems>

export type AppRootState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootState, any, UsersActions>
