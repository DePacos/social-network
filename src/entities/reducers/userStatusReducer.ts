import { DispatchActions, UserStatus, UserStatusActions } from "@/app/types/types"
import { Dispatch } from "react"
import { userStatusAPI } from "@/shared/api/userStatusAPI"
import { handlerRequests } from "@/app/utils/handlerRequests"

export const userStatusReducer = (
  state: UserStatus = '',
  action: UserStatusActions
) => {
  switch (action.type) {
    case "SET_USER_STATUS":
      return action.payload
    default:
      return state
  }
}

export const setProfileStatus = (status: string) =>
  ({ type: "SET_USER_STATUS", payload: status }) as const

export const fetchUserStatus =
  (userId: number) => async (dispatch: Dispatch<DispatchActions>) => {
  await handlerRequests(() => userStatusAPI.fetchUserStatus(userId), dispatch, setProfileStatus)
}

export const fetchEditUserStatus =
  (status: string) => async (dispatch: Dispatch<DispatchActions>) => {
  await handlerRequests<Response>(() => userStatusAPI.editUserStatus(status), dispatch)
  }