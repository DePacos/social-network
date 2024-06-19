import {AddPostActionType} from "../../types/types";

export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: 'ADD_POST',
        postText: postText
    }
}

