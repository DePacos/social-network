import {ActionsTypes, UserType} from "../../types/types";
import {data} from "../data";



const initialState = data.users

export const dialogsReducer = (state: UserType[] = initialState, action: ActionsTypes) => {
    switch (action.type){
        default:
            return state
    }
}