import { AppActions } from "../../app/types/types"

const initialState = {
  isInitialized: false,
  isLoading: false,
  error: "",
}

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload.status }
    case "INITIALIZED":
      return { ...state, isInitialized: action.payload.status }
    case "SET_ERROR":
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}

export const changeIsLoading = (status: boolean) =>
  ({ type: "LOADING", payload: { status } }) as const

export const changeIsInitialized = (status: boolean) =>
  ({ type: "INITIALIZED", payload: { status } }) as const

export const setError = (error: string) =>
  ({ type: "SET_ERROR", payload: { error } }) as const
