import {combineReducers, legacy_createStore} from "redux";
import {postReducer} from "./reducers/postReducer";



export const rootReducer = combineReducers({
    posts: postReducer
})

export const store= legacy_createStore(rootReducer)