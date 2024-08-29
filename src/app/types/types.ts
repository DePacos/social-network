import { setUsers } from "../../entities/users/usersReducer"
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

export type Actions = ReturnType<typeof setUsers>

export type AppRootState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootState, any, Actions>
