import { DispatchActions, FollowActions, FollowInitialState, Response } from "@/app/types/types"
import { followAPI } from "@/shared/api/followAPI"
import { Dispatch } from "react"
import { handlerFollowRequests } from "@/app/utils/handlerFollowRequests"

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
  (userId: number) => async (dispatch: Dispatch<DispatchActions | FollowActions>) => {
  await handlerFollowRequests(() => followAPI.fetchFollow(userId), dispatch, changeFollow)
}

export const setFollow =
  (userId: number) => async (dispatch: Dispatch<DispatchActions | FollowActions>)  => {
    await handlerFollowRequests(() => followAPI.setFollow(userId), dispatch, changeFollow)
}

export const removeFollow =
  (userId: number) => async (dispatch: Dispatch<DispatchActions |FollowActions>) => {
    await handlerFollowRequests(() => followAPI.removeFollow(userId), dispatch, changeFollow)
}