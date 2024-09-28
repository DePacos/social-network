import { AppActions, AuthActions, LoginRequest } from "../../app/types/types"
import { Dispatch } from "react"
import { changeAppStatus } from "./appReducer"
import { authAPI } from "../../shared/api/authAPI"

const initialState = {
  isLoggedIn: false,
}

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload.status }
    default:
      return state
  }
}

export const changeIsLoggedInStatus = (status: boolean) =>
  ({ type: "SET_LOGGED_IN", payload: { status } }) as const

export const login =
  (data: LoginRequest) =>
  async (dispatch: Dispatch<AppActions | AuthActions>) => {
    dispatch(changeAppStatus(true))
    try {
      const res = await authAPI.login(data)
      if (res.data.resultCode === 0) {
        dispatch(changeIsLoggedInStatus(true))
        dispatch(changeAppStatus(false))
      }
    } catch (error) {
      console.log("login failed", error)
    }
  }

export const logout =
  () => async (dispatch: Dispatch<AppActions | AuthActions>) => {
    dispatch(changeAppStatus(true))
    try {
      const res = await authAPI.logout()
      if (res.data.resultCode === 0) {
        dispatch(changeIsLoggedInStatus(false))
        dispatch(changeAppStatus(false))
      }
    } catch (error) {
      console.log("logout failed", error)
    }
  }

export const me =
  () => async (dispatch: Dispatch<AppActions | AuthActions>) => {
    dispatch(changeAppStatus(true))
    try {
      const res = await authAPI.me()
      if (res.data.resultCode === 0) {
        dispatch(changeIsLoggedInStatus(true))
        dispatch(changeAppStatus(false))
      }
    } catch (error) {
      console.log("me failed", error)
    }
  }
