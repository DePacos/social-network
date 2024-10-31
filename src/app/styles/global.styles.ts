import styled, { createGlobalStyle } from "styled-components"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {box-sizing: border-box; margin: 0; padding: 0;}
    * {box-sizing: border-box; }
    //html{scroll-behavior: smooth; scroll-padding-top: 100px}
    body{
        font-family: Roboto, 
        sans-serif; font-weight: 400; 
        color: ${({ theme }) => theme.colors.fontColor};
        background-color: ${({ theme }) => theme.colors.body}}
    a {text-decoration: none; color: ${({ theme }) => theme.colors.fontColor};}
    ul {list-style: none;}
    
`

export const SkeletonStyled = styled(Skeleton)`
  background-color: #6aaebf;
`
