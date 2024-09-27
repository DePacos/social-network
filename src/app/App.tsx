import React from "react"
import { GlobalStyles } from "./styles/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import { socialThemeDark } from "./styles/ThemeDark"
import { socialThemeLight } from "./styles/ThemeLight"
import { Container } from "../shared/ui/Container/Container"

import { Header } from "../widgets/Header/Header"
import { Sidebar } from "../widgets/Sidebar/Sidebar"
import { Article } from "../widgets/Article/Article"
import { authAPI } from "../shared/api/authAPI"
import { Login } from "../features/auth/Login"

type AppProps = {}

export class App extends React.Component<AppProps, { themeMode: boolean }> {
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
    const me = () => {
      authAPI.me().then((res) => console.log(res))
    }

    const logout = () => {
      authAPI.logout().then((res) => console.log(res))
    }

    const login = () => {
      authAPI
        .login({
          email: "depacos1@gmail.com",
          password: "5285019",
          rememberMe: true,
        })
        .then((res) => console.log(res))
    }

    return (
      <div className="App">
        <ThemeProvider
          theme={this.state.themeMode ? socialThemeLight : socialThemeDark}
        >
          <GlobalStyles />
          <Header changeTheme={this.changeTheme} />
          <button onClick={() => login()}>Login</button>
          <button onClick={() => me()}>Me</button>
          <button onClick={() => logout()}>Logout</button>
          <main>
            <Login />
            <MainWrap>
              {/*<Sidebar />*/}
              {/*<Article />*/}
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
