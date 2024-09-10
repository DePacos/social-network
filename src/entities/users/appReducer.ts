import { AppActions } from "../../app/types/types"

const initialState = {
  isLoading: false,
}

export const appReducer = (state = initialState, action: AppActions) => {
  console.log("action", action)
  switch (action.type) {
    case "CHANGE_LOADING":
      return { ...state, isLoading: action.payload.status }
    default:
      return state
  }
}

export const changeAppStatus = (status: boolean) =>
  ({ type: "CHANGE_LOADING", payload: { status } }) as const
