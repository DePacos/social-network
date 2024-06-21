import React from 'react';
import {GlobalStyles} from "./styles/GlobalStyles";
import styled, {ThemeProvider} from "styled-components";
import {socialThemeDark} from "./styles/ThemeDark";
import {socialThemeLight} from "./styles/ThemeLight";
import {Container} from "./components/container/Container";

import {Header} from "./layout/header/Header";
import {Sidebar} from "./layout/sidebar/Sidebar";
import {Article} from "./layout/article/Article";
import {AppStateType} from "./types/types";

type AppProps = {}

export class App extends React.Component<AppProps, AppStateType> {

    constructor(props:AppProps) {
        super(props)

        this.state = {
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
                            <Article/>
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