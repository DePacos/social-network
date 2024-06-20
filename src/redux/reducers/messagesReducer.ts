import {ActionsTypes, MessagesType,} from "../../types/types";
import {data} from "../data";



const initialState = data.messages

export const messagesReducer = (state: MessagesType = initialState, action: ActionsTypes) => {
    switch (action.type){
        default:
            return state
    }
}