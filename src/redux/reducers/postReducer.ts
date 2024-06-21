import {ActionsTypes, PostType} from "../../types/types";
import {data} from "../data";
import postImg from "../../assets/images/post-def.webp";



const initialState = data.posts

export const postReducer = (state: PostType[] = initialState, action: ActionsTypes) => {
    switch (action.type){
        case "ADD_POST":
            return [...state, {
                id: 1,
                userId: 1,
                title: "test post",
                body: action.postText,
                img: postImg,
            }]
        default:
            return state
    }
}