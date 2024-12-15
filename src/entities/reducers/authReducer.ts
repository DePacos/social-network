import {
  AuthActions,
  AuthInitialState,
  DispatchActions,
  LoginRequest,
  MeData,
  Response,
  UserProfile
} from "@/app/types/types"
import { Dispatch } from "react"
import { authAPI } from "@/shared/api/authAPI"
import { handlerAuthRequests } from "@/app/utils/handlerAuthRequests"
import { handlerRequests } from "@/app/utils/handlerRequests"
import { profileAPI } from "@/shared/api/profileAPI"

const initialState: AuthInitialState = {
  isLoggedIn: false,
  captcha: "",
  currentUserId: 0,
  currentUserAvatar: ''
}

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload.status }
    case "SET_CURRENT_USER_ID":
      return { ...state, currentUserId: action.payload.userId }
    case "SET_CAPTCHA":
      return { ...state, captcha: action.payload.url }
    case "SET_CURRENT_USER_AVATAR":
      return { ...state, currentUserAvatar: action.payload.url }
    default:
      return state
  }
}

export const changeIsLoggedInStatus = (status: boolean) =>
  ({ type: "SET_LOGGED_IN", payload: { status } }) as const

export const setCurrentUserId = (userId: number) =>
  ({ type: "SET_CURRENT_USER_ID", payload: { userId } }) as const

export const setCaptcha = (url: string) =>
  ({ type: "SET_CAPTCHA", payload: { url } }) as const

export const setCurrentUserAvatar = (url: string) =>
  ({ type: "SET_CURRENT_USER_AVATAR", payload: { url } }) as const

export const login =
  (data: LoginRequest) =>
    async (dispatch: Dispatch<DispatchActions>) => {
      await handlerAuthRequests<Response<{ userId: number }>>(() => authAPI.login(data), dispatch, res => setCurrentUserId(res.data.userId))
}

export const logout =
  () => async (dispatch: Dispatch<DispatchActions>) => {
    await handlerAuthRequests(() => authAPI.logout(), dispatch)
  }

export const me =
  () => async (dispatch: Dispatch<DispatchActions>) => {
   await handlerAuthRequests<Response<MeData>>(() => authAPI.me(), dispatch, res => setCurrentUserId(res.data.id))
  }

export const fetchAvatar =
  (userId: number) => async (dispatch: Dispatch<DispatchActions>) => {
    await handlerRequests<UserProfile>(() => profileAPI.fetchProfile(userId), dispatch, res => setCurrentUserAvatar(res.photos!.small))
  }
