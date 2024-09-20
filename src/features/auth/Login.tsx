import React from "react"
import { S } from "./Login_Styled"
import { Button } from "../../shared/ui/Button/Button"

export const Login = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const data = new FormData(e.target as any)
    console.log(data.get("email"), data.get("password"), data.get("remember"))
  }
  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <input name="email" type="email" required />
        <input name="password" type="password" required />
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
