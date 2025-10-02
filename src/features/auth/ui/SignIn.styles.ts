import styled from 'styled-components'

import login from '@/shared/assets/images/login-bg.jpg'

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  background:
    ${({ theme }) => theme.colors.overlay},
    url(${login}) no-repeat center;
  background-size: cover;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  width: 320px;
  min-height: 400px;
  margin: 0 auto;
  border: 2px solid;
  border-radius: 10px;
`
const Form = styled.form.withConfig({
  shouldForwardProp: prop => prop !== 'error',
})<Props>`
  display: flex;
  flex-direction: column;
  gap: 25px;

  button {
    position: relative;
    font-size: 14px;
  }

  button:last-of-type:before {
    content: '${props => props.error}';
    position: absolute;
    top: -20px;
    left: 5px;
    font-size: 14px;
    color: red;
    width: max-content;
  }
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`

const WrapCheckbox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 14px;
`

export const S = {
  Container,
  Error,
  Form,
  Logo,
  WrapCheckbox,
  Wrapper,
}

type Props = {
  error?: string | null
}
