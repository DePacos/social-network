import React from "react"
import { GlobalStyles } from "./styles/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
import { socialThemeDark } from "./styles/ThemeDark"
import { socialThemeLight } from "./styles/ThemeLight"
import { Container } from "../shared/ui/Container/Container"
import Header from "../widgets/Header/Header"
import { Sidebar } from "../widgets/Sidebar/Sidebar"
import { Article } from "../widgets/Article/Article"
import Login from "../features/auth/Login"
import { AppRootState } from "./types/types"
import { connect } from "react-redux"

export class App extends React.Component<Props, { themeMode: boolean }> {
  constructor(props: Props) {
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
          {!this.props.isLoggedIn ? (
            <Login />
          ) : (
            <>
              <Header changeTheme={this.changeTheme} />
              <main>
                <MainWrap>
                  <Sidebar />
                  <Article />
                </MainWrap>
              </main>
            </>
          )}
        </ThemeProvider>
      </div>
    )
  }
}

const MainWrap = styled(Container)`
  display: grid;
  grid-template-columns: 300px 1fr;
`

const mapStateToProps = (state: AppRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

export default connect(mapStateToProps)(App)

type Props = {
  isLoggedIn: boolean
}
