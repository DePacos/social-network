import styled from "styled-components"

const Wrapper = styled.div<{
  $view: boolean
}>`
  position: absolute;
  bottom: 10px;
    left: 10px;
    transition: 0.3s ease-in-out;
    transform: ${({ $view }) => $view ? 'translateX(0)' : 'translateX(-200px)'};
`

const Toast = styled.p`
    padding: 15px;
    background-color: #ff6c6c;
    width: max-content;
    box-shadow: 0 0 5px 1px;
    border-radius: 5px;
`
export const S = {
  Wrapper,
  Toast,
}