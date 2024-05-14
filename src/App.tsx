import React from 'react';
// import logo from './logo.svg';
import {GlobalStyles} from "./styles/GlobalStyles";
import styled, {ThemeProvider} from "styled-components";
import {socialThemeDark} from "./styles/ThemeDark";
import {socialThemeLight} from "./styles/ThemeLight";
import {Container} from "./components/container/Container";

import postImg from "./assets/images/post-def.webp";
import {data} from './redux/data'

import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sidebar/Sidebar";
import {Article} from "./layout/article/Article";




export type PostsType = {
    id: number
    userId: number
    title: string
    body: string
    img: string
}

export type UsersType = {
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

type AppState ={
    posts: Array<PostsType>
    users: Array<UsersType>
    messages: MessagesType
    addPostInput: string
    themeMode: boolean
}

type AppProps ={}

export class App extends React.Component<AppProps, AppState>  {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            users: data.users,
            posts: data.posts,
            messages: data.messages,
            addPostInput: '',
            themeMode: false,
        }
    }
    changeTheme = () => {
        this.setState({themeMode: !this.state.themeMode})
    }

    changeAddPostInput = (value:string) =>{
        this.setState({addPostInput: value})
    }

    addPost = () => {
        const newPost = {
            userId: 3,
            id: 5,
            title: "new post",
            body: this.state.addPostInput,
            img: postImg,
        }

        this.setState({posts: [...this.state.posts, newPost]})
        this.setState({addPostInput: ''})
    }

    render() {
        return (
            <div className="App">
                <ThemeProvider theme={this.state.themeMode ? socialThemeLight : socialThemeDark}>
                    <GlobalStyles/>
                    <Header changeTheme={this.changeTheme}/>
                    <main>
                        <MainWrap>
                            <Sidebar/>
                            <Article
                                posts={this.state.posts}
                                users={this.state.users}
                                messages={this.state.messages}
                                changeAddPostInput={this.changeAddPostInput}
                                addPost={this.addPost}
                                addPostInput={this.state.addPostInput}
                            />
                        </MainWrap>
                    </main>
                </ThemeProvider>
            </div>
        );
    }
}

const MainWrap = styled(Container)
    `
        display: grid;
        grid-template-columns: 300px 1fr;
    `