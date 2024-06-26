import {rootReducer} from "../redux/store";

export type PostType = {
    id: number
    userId: number
    title: string
    body: string
    img: string
}

export type UserType = {
    id: number
    massagesId: string
    name: string
    role: string
    avatar: string
}

export type MessageType = {
    id: string
    userMassage: string
    date: string
}

export type MessagesType = {
    [key: string]:MessageType[]
}

export type AppStateType ={
    themeMode: boolean
}

export type AppRootState = ReturnType<typeof rootReducer>

export type AddPostActionType = {
    type: 'ADD_POST'
    postText: string
}

export type ActionsTypes = AddPostActionType