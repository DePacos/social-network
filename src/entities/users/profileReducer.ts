import {
  Contacts,
  Photos,
  UserProfile,
  ProfileActions,
} from "../../app/types/types"
import { usersAPI } from "../../shared/api/usersAPI"
import { Dispatch } from "react"

const initialState: UserProfile = {
  userId: 0,
  lookingForAJob: false,
  lookingForAJobDescription: "",
  fullName: "",
  contacts: {} as Contacts,
  photos: {} as Photos,
}

export const profileReducer = (
  state: UserProfile = initialState,
  action: ProfileActions,
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const setProfile = (profile: UserProfile) =>
  ({ type: "SET_USER", payload: profile }) as const

export const fetchProfile =
  (userId: number) =>
  async (dispatch: Dispatch<ReturnType<typeof setProfile>>) => {
    try {
      const res = await usersAPI.fetchProfile(userId)
      dispatch(setProfile(res.data))
    } catch (error) {
      console.log(error)
    }
  }
