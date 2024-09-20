import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  input {
    padding: 5px;
    height: 25px;
  }
`

const WrapCheckbox = styled.div`
  display: flex;
  gap: 5px;
`

export const S = {
  Wrapper,
  Form,
  WrapCheckbox,
}
