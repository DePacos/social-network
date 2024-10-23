import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit"
import { usersReducer } from "../entities/reducers/usersReducer"
import { thunk } from "redux-thunk"
import { profileReducer } from "../entities/reducers/profileReducer"
import { appReducer } from "../entities/reducers/appReducer"
import { authReducer } from "../entities/reducers/authReducer"

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
