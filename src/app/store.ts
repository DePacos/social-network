import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit"
import { usersReducer } from "../entities/users/usersReducer"
import { thunk } from "redux-thunk"
import { profileReducer } from "../entities/users/profileReducer"
import { appReducer } from "../entities/users/appReducer"
import { authReducer } from "../entities/users/authReducer"

export const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
  app: appReducer,
  auth: authReducer,
})

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk) as any,
)
