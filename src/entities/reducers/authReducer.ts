import { AppActions, AppThunkDispatch, AuthActions, LoginRequest } from "@/app/types/types"
import { Dispatch } from "react"
import { changeIsInitialized, changeIsLoading, setError } from "./appReducer"
import { authAPI } from "@/shared/api/authAPI"

const initialState = {
  isLoggedIn: false,
  captcha: '',
  currentUserId: "",
}

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload.status }
    case "SET_CURRENT_USER_ID":
      return { ...state, currentUserId: action.payload.userId }
    case "SET_CAPTCHA":
      return { ...state, captcha: action.payload.url }
    default:
      return state
  }
}

export const changeIsLoggedInStatus = (status: boolean) =>
  ({ type: "SET_LOGGED_IN", payload: { status } }) as const

export const setCurrentUserId = (userId: string) =>
  ({ type: "SET_CURRENT_USER_ID", payload: { userId } }) as const

export const setCaptcha = (url: string) =>
  ({ type: "SET_CAPTCHA", payload: { url } }) as const

export const login =
  (data: LoginRequest) =>
  async (dispatch: AppThunkDispatch) => {
    dispatch(changeIsLoading(true))
    try {
      const res = await authAPI.login(data)
      if (res.data.resultCode === 0) {
        dispatch(changeIsLoggedInStatus(true))
        dispatch(setCurrentUserId(res.data.data.userId))
        dispatch(changeIsLoading(false))
      }
      if (res.data.resultCode === 10) {
        await dispatch(captcha())
        dispatch(setError(res.data.messages[0]))
      }
      if (res.data.resultCode === 1) {
        dispatch(setError(res.data.messages[0]))
      }
    } catch (error) {
      dispatch(setError('network error'))
      console.log('login', error)
    }
  }

export const logout =
  () => async (dispatch: Dispatch<AppActions | AuthActions>) => {
    dispatch(changeIsLoading(true))
    try {
      const res = await authAPI.logout()
      if (res.data.resultCode === 0) {
        dispatch(changeIsLoggedInStatus(false))
        dispatch(changeIsLoading(false))
      }
    } catch (error) {
      dispatch(setError('network error'))
      console.log('logout', error)
    }
  }

  export const captcha =
  () => async (dispatch: Dispatch<AppActions | AuthActions>) => {
    try {
      const res = await authAPI.captcha()
      dispatch(setCaptcha(res.data.url))
    } catch (error) {
      dispatch(setError('network error'))
      console.log('captcha', error)
    }
  }

export const me =
  () => async (dispatch: Dispatch<AppActions | AuthActions>) => {
    dispatch(changeIsLoading(true))
    try {
    const res = await authAPI.me()
      if (res.data.resultCode === 0) {
        dispatch(changeIsLoggedInStatus(true))
        dispatch(setCurrentUserId(String(res.data.data.id)))
        dispatch(changeIsLoading(false))
      }
      if (res.data.resultCode === 1) {
        dispatch(setError(res.data.messages[0]))
      }
    } catch (error) {
      dispatch(setError('network error'))
      console.log('me', error)
    } finally {
      dispatch(changeIsInitialized(true))
    }
  }
