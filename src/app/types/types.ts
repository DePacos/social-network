import {
  changePageItems,
  changePagination, clearSearchUsers,
  setPage, setSearchUsers,
  setUsers
} from "@/entities/reducers/usersReducer"
import { rootReducer } from "../store"
import { ThunkDispatch } from "redux-thunk"
import { editProfile, setProfile, setProfileStatus } from "@/entities/reducers/profileReducer"
import {
  changeIsInitialized,
  changeIsLoading,
  setError, setThemeMode
} from "@/entities/reducers/appReducer"
import {
  changeIsLoggedInStatus, setCaptcha,
  setCurrentUserId
} from "@/entities/reducers/authReducer"

export type AppInitialState = {
  isInitialized: boolean
  isLoading: boolean
  themeMode: 'dark' | 'light',
  appNotifications: string
}

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
  lookingForAJob?: boolean
  lookingForAJobDescription: string
  fullName?: string
  contacts?: Contacts
  photos?: Photos
  aboutMe: string
}

export type UserStatus = {
  status?: string
}

export type User = {
  id: number
  name: string
  photos: Photos
  status: string
  followed: boolean
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
  | ReturnType<typeof setThemeMode>

export type AuthActions =
  | ReturnType<typeof changeIsLoggedInStatus>
  | ReturnType<typeof setCurrentUserId>
  | ReturnType<typeof setCaptcha>

export type ProfileActions =
  | ReturnType<typeof setProfile>
  | ReturnType<typeof setProfileStatus>
  | ReturnType<typeof editProfile>

export type UsersActions =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof changePagination>
  | ReturnType<typeof setPage>
  | ReturnType<typeof changePageItems>
  | ReturnType<typeof setSearchUsers>
  | ReturnType<typeof clearSearchUsers>

export type AppRootState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootState, void, AuthActions | AppActions>
