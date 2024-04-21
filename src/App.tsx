import React from 'react';
// import logo from './logo.svg';
import {GlobalStyles} from "./styles/GlobalStyles";
import styled, {ThemeProvider} from "styled-components";
import {socialThemeDark} from "./styles/ThemeDark";
import {socialThemeLight} from "./styles/ThemeLight";

import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sidebar/Sidebar";
import {Article} from "./layout/article/Article";
import {Container} from "./components/container/Container";

import {data} from './redux/data'
import postImg from "./assets/images/post-def.webp";

export type PostsType = {
    userId: number,
    id: number,
    title: string,
    body: string,
    img: string
}

type AppState ={
    posts: Array<PostsType>
    addPostInput: string
    themeMode: boolean
}

type AppProps ={}


export class App extends React.Component<AppProps, AppState>  {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            posts: data.posts,
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