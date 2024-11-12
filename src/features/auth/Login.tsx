import React from "react"
import { S } from "./login.styles"
import { Button } from "@/shared/ui/Button/Button"
import { AppRootState, LoginRequest, User } from "@/app/types/types"
import { login } from "@/entities/reducers/authReducer"
import { connect } from "react-redux"
import logo from "@/shared/assets/images/logo.webp"

class Login extends React.Component<Props> {
  render() {
    const { login, appError, captcha } = this.props

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()

      const data = new FormData(e.target as any)

      login({
        email: data.get("email") as string,
        password: data.get("password") as string,
        captcha: data.get("captcha") as string,
      })
    }

    return (
      <S.Container>
      <S.Wrapper>
        <S.Logo>
          <img src={logo} alt="logo" />
          <span>SocialNetwork</span>
        </S.Logo>
        <S.Form error={appError} onSubmit={onSubmit}>
          <input placeholder={"Email*"} name="email" type="email" required />
          <input
            placeholder={"Password*"}
            name="password"
            type="password"
            required
          />
          <S.WrapCheckbox>
            <input name="remember" type="checkbox" />
            <span>remember me</span>
          </S.WrapCheckbox>
          {captcha &&
            <>
            <img src={captcha} alt="captcha" />
            <input placeholder='enter captcha' name='captcha' />
            </>
          }
          <Button variant="primary" type="submit">
            Login
          </Button>
        </S.Form>
      </S.Wrapper>
      </S.Container>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  captcha: state.auth.captcha,
  isLoading: state.app.isLoading,
  appError: state.app.error,
})

type Props = {
  login: (data: LoginRequest) => void
  isLoading: boolean
  isLoggedIn: boolean
  appError: string
  captcha: string
}

export default connect(mapStateToProps, {login})(Login)
