import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`

const Toast = styled.p`
  padding: 15px;
  background-color: #ff6c6c;
  width: max-content;
  box-shadow: 0 0 5px 1px;
  border-radius: 5px;
`

export const S = {
  Toast,
  Wrapper,
}
