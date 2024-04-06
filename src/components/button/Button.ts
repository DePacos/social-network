import styled from "styled-components";

export const Button = styled.button
`
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.fontColor};
    background-color: transparent;
`