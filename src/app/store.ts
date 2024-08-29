import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "@reduxjs/toolkit"
import { usersReducer } from "../entities/users/usersReducer"
import { thunk } from "redux-thunk"

export const rootReducer = combineReducers({
  users: usersReducer,
})

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk) as any,
)
