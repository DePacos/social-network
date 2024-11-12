import styled, { css } from "styled-components"

const Header = styled.header
    `
        border-bottom: 1px solid ;
    `
const HeaderWrap = styled.div
    `
        display: grid;
        grid-template-columns: 190px 1fr 70px 20px 150px;
        align-items: center;
        justify-items: center;
        gap: 30px;
        padding: 20px 0;

        a {
            display: flex;
            gap: 15px;
            align-items: center;
            font-size: 18px;
        }

        input {
            max-width: 600px;
            width: 100%;
            height: 40px;
            justify-self: end;
            padding: 10px;
            border: none;
            border-radius: 10px;

            &:focus-visible {
                outline: 2px solid #0c9bd4;
            }
        }

        & > ul {
            display: flex;
            gap: 10px;
            justify-content: space-between;
            position: relative;

            :first-child::after {
                content: '|';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            button{
                font-size: 16px;
            }
        }
        button ~ :last-child{
            height: 40px;
            font-size: 18px;
            justify-self: end;
            padding-left: 50px;
            background: url("${({theme}) => theme.icons.loginIcon}") no-repeat;
        }
    `

const HeaderSearch = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
    width: 100%;
    max-width: 600px;
`

const HeaderSearchResWrap = styled.div`
    position: relative;
    margin: 0 10px;
`
const HeaderSearchRes = styled.div<Props>`
    position: absolute;
    width: 100%;
    max-height: 350px;
    overflow: hidden;
    overflow-y: auto;
    padding: 10px 15px;
    border-radius: 10px;
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    
    ${props => !props.searchValue && css <Props>`
        opacity: 0;
        transform: translateY(-10px);
    `}
`

const HeaderSearchResItem = styled.ul`
    display: flex;
    flex-direction: column;

    li a {
        font-size: 14px;
        padding: 6px;
    }
   li + li {
        border-top: 1px solid #444;
    }
    & li:hover{
        box-shadow: 0 1px 3px 1px;
    }
`

export const S = {
    Header,
    HeaderWrap,
    HeaderSearch,
    HeaderSearchRes,
    HeaderSearchResWrap,
    HeaderSearchResItem,
}

type Props = {
    searchValue: string
}