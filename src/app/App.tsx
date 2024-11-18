import React from "react"
import { GlobalStyles } from "./styles/global.styles"
import styled, { ThemeProvider } from "styled-components"
import { socialThemeDark } from "./styles/themeDark.styles"
import { socialThemeLight } from "./styles/themeLight.styles"
import { ContainerStyles } from "@/shared/ui/Container/container.styles"
import Header from "@/widgets/Header/Header"
import { Sidebar } from "@/widgets/Sidebar/Sidebar"
import { Article } from "@/widgets/Article/Article"
import Login from "@/features/auth/Login"
import { AppRootState, AuthResponse, MeData } from "./types/types"
import { connect } from "react-redux"
import { me } from "@/entities/reducers/authReducer"
import { changeIsLoading } from "@/entities/reducers/appReducer"
import Skeleton from "react-loading-skeleton"
import  Toast  from "@/shared/ui/Toast/Toast"
import { AxiosResponse } from "axios"

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
                <Toast error={appError} />
              </main>
            </>
          )}
        </ThemeProvider>
      </div>
    )
  }
}

const MainWrap = styled(ContainerStyles)`
    display: grid;
    grid-template-columns: 300px 1fr;
`

const mapStateToProps = (state: AppRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isInitialized: state.app.isInitialized,
  appError: state.app.error
})

type Props = {
  isLoggedIn: boolean
  isInitialized: boolean
  appError: string
  me: () => void
}

export default connect(mapStateToProps, {
  me, changeIsLoading
})(App)
