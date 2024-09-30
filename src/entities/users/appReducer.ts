import { AppActions } from "../../app/types/types"

const initialState = {
  isInitialized: false,
  isLoading: false,
}

export const appReducer = (state = initialState, action: AppActions) => {
  console.log("action", action)
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload.status }
    default:
      return state
  }
}

export const changeAppStatus = (status: boolean) =>
  ({ type: "LOADING", payload: { status } }) as const
