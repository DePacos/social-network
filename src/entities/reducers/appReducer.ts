import { AppActions, AppInitialState } from "@/app/types/types"
import { manageThemeMode } from "@/app/utils/manageThemeMode"

const initialState: AppInitialState = {
  isInitialized: false,
  isLoading: false,
  themeMode: manageThemeMode.get() as 'dark' | 'light',
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
    case "SET_THEME_MODE":
      return { ...state, themeMode: action.payload.themeMode }
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

export const setThemeMode = (themeMode: 'dark' | 'light') =>
  ({ type: "SET_THEME_MODE", payload: { themeMode } }) as const
