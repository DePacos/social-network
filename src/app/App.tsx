import React from "react"
import { GlobalStyles } from "./styles/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import { socialThemeDark } from "./styles/ThemeDark"
import { socialThemeLight } from "./styles/ThemeLight"
import { Container } from "../shared/ui/Container/Container"

import { Header } from "../widgets/Header/Header"
import { Sidebar } from "../widgets/Sidebar/Sidebar"
import { Article } from "../widgets/Article/Article"
import { AppStateType } from "./types/types"

type AppProps = {}

export class App extends React.Component<AppProps, AppStateType> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      themeMode: false,
    }
  }

  changeTheme = () => {
    this.setState({ themeMode: !this.state.themeMode })
  }

  render() {
    return (
      <div className="App">
        <ThemeProvider
          theme={this.state.themeMode ? socialThemeLight : socialThemeDark}
        >
          <GlobalStyles />
          <Header changeTheme={this.changeTheme} />
          <main>
            <MainWrap>
              <Sidebar />
              <Article />
            </MainWrap>
          </main>
        </ThemeProvider>
      </div>
    )
  }
}

const MainWrap = styled(Container)`
  display: grid;
  grid-template-columns: 300px 1fr;
`
