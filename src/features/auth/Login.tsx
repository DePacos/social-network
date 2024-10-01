import React from "react"
import { S } from "./Login_Styled"
import { Button } from "../../shared/ui/Button/Button"
import { AppRootState, LoginRequest, User } from "../../app/types/types"
import { login } from "../../entities/users/authReducer"
import { connect } from "react-redux"
import logo from "../../shared/assets/images/logo.webp"

class Login extends React.Component<Props> {
  render() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      const data = new FormData(e.target as any)
      this.props.login({
        email: data.get("email") as string,
        password: data.get("password") as string,
      })
    }

    return (
      <S.Wrapper>
        <S.Logo>
          <img src={logo} alt="logo" />
          <span>SocialNetwork</span>
        </S.Logo>
        <S.Form onSubmit={onSubmit}>
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
          <Button variant="primary" type="submit">
            Login
          </Button>
        </S.Form>
      </S.Wrapper>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.app.isLoading,
})

const mapDispatchToProps = {
  login: login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

type Props = {
  login: (data: LoginRequest) => void
  isLoading: boolean
  isLoggedIn: boolean
}
