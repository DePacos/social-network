import {
  changePageItems,
  changePagination,
  setPage,
  setUsers,
} from "../../entities/reducers/usersReducer"
import { rootReducer } from "../store"
import { ThunkDispatch } from "redux-thunk"
import { setProfile } from "../../entities/reducers/profileReducer"
import {
  changeIsInitialized,
  changeIsLoading,
  setError,
} from "../../entities/reducers/appReducer"
import {
  changeIsLoggedInStatus, setCaptcha,
  setCurrentUserId
} from "../../entities/reducers/authReducer"

export type Photos = {
  small: string
  large: string
}

export type Contacts = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type UserProfile = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: Contacts
  photos: Photos
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

export type MeData = {
  id: number
  email: string
  login: string
}

export type AuthResponse<Data = {}> = {
  resultCode: number
  messages: string[]
  data: Data
}

export type LoginRequest = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}

export type AppActions =
  | ReturnType<typeof changeIsLoading>
  | ReturnType<typeof changeIsInitialized>
  | ReturnType<typeof setError>

export type AuthActions =
  | ReturnType<typeof changeIsLoggedInStatus>
  | ReturnType<typeof setCurrentUserId>
  | ReturnType<typeof setCaptcha>

export type ProfileActions = ReturnType<typeof setProfile>

export type UsersActions =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof changePagination>
  | ReturnType<typeof setPage>
  | ReturnType<typeof changePageItems>

export type AppRootState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootState, void, AuthActions | AppActions>
