import {combineReducers, legacy_createStore} from "redux";
import {postReducer} from "./reducers/postReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {messagesReducer} from "./reducers/messagesReducer";



export const rootReducer = combineReducers({
    posts: postReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer
})

export const store= legacy_createStore(rootReducer)