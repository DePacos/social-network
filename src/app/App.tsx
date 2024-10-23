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
import { me } from "../entities/reducers/authReducer"
import { changeIsLoading } from "../entities/reducers/appReducer"
import Skeleton from "react-loading-skeleton"
import  Toast  from "../shared/ui/Toast/Toast"

export class App extends React.Component<Props, { themeMode: boolean }> {
  constructor(props: Props) {
    super(props)

    this.state = {
      themeMode: false
    }
  }

  changeTheme = () => {
    this.setState({ themeMode: !this.state.themeMode })
  }

  componentDidMount() {
    this.props.me()
  }


  render() {
    const { themeMode } = this.state
    const { isInitialized, isLoggedIn, appError } = this.props

    if (!isInitialized) {
      return <Skeleton />
    }

    return (
      <div className="App">
        <ThemeProvider
          theme={themeMode ? socialThemeLight : socialThemeDark}
        >
          <GlobalStyles />
          {!isLoggedIn ? (
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
              <Toast error={appError} />
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
  isInitialized: state.app.isInitialized,
  appError: state.app.error
})

const mapDispatchToProps = {
  me: me,
  changeAppStatus: changeIsLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

type Props = {
  isLoggedIn: boolean
  isInitialized: boolean
  appError: string
  me: () => void
  changeAppStatus: (status: boolean) => void
}
