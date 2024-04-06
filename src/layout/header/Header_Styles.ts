import styled from "styled-components";

const Header = styled.header
    `
        border-bottom: 1px solid ;
    `
const HeaderWrap = styled.div
    `
        display: grid;
        grid-template-columns: 190px 1fr 70px 20px 150px;
        align-items: center;
        gap: 30px;
        padding: 20px 0;

        a:first-child {
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

        ul {
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

export const S = {
    Header,
    HeaderWrap
}