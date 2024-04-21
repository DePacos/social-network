import styled from "styled-components";


const Button_Styles = styled.button
`
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.fontColor};
    background-color: transparent;
`

export const S = {
    Button: Button_Styles
}