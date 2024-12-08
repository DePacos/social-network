import { AppActions, AppInitialState } from "@/app/types/types"

const initialState: AppInitialState = {
  isInitialized: false,
  isLoading: false,
  appNotifications: "",
}

export const appReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload.status }
    case "INITIALIZED":
      return { ...state, isInitialized: action.payload.status }
    case "SET_NOTIFICATION":
      return { ...state, appNotifications: action.payload.appNotifications }
    default:
      return state
  }
}

export const changeIsLoading = (status: boolean) =>
  ({ type: "LOADING", payload: { status } }) as const

export const changeIsInitialized = (status: boolean) =>
  ({ type: "INITIALIZED", payload: { status } }) as const

export const setError = (appNotifications: string) =>
  ({ type: "SET_NOTIFICATION", payload: { appNotifications } }) as const
