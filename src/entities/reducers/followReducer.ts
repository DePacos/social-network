import { DispatchActions, FollowActions, FollowInitialState } from "@/app/types/types"
import { followAPI } from "@/shared/api/followAPI"
import { Dispatch } from "react"
import { handlerRequests } from "@/app/utils/handlerRequests"

const initialState: FollowInitialState = {
  isFollow: false
}

export const followReducer = (state = initialState, action: FollowActions) => {
  switch (action.type) {
    case "CHANGE_FOLLOW":
      return { ...state, isFollow: action.payload }
    default:
      return state
  }
}

export const changeFollow = (isFollow: boolean) =>
  ({ type: "CHANGE_FOLLOW", payload: isFollow }) as const

export const fetchFollow =
  (userId: number) => async (dispatch: Dispatch<DispatchActions>) => {
  await handlerRequests(() => followAPI.fetchFollow(userId), dispatch, changeFollow)
}

export const setFollow =
  (userId: number) => async (dispatch: Dispatch<DispatchActions>)  => {
  await handlerRequests(() => followAPI.setFollow(userId), dispatch, changeFollow)
}

export const removeFollow =
  (userId: number) => async (dispatch: Dispatch<DispatchActions>) => {
  await handlerRequests(() => followAPI.removeFollow(userId), dispatch, changeFollow)
  }