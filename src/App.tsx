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

export type PostsType = {
    userId: number,
    id: number,
    title: string,
    body: string,
    img: string
}

type DataType = {
    posts: Array<PostsType>
}

type AppState ={
    data: DataType
    themeMode: boolean
}

type AppProps ={
    // posts: Array<PostsType>
}


// data = {posts: [{id:1}, {id:2}, {id:3}]}

export class App extends React.Component<AppProps, AppState>  {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            data: data,
            themeMode: false
        }
    }
    changeTheme = () => {
        this.setState({themeMode: !this.state.themeMode})
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
                            <Article posts={data.posts}/>
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