import styled from "styled-components";


const Sidebar = styled.aside
`
padding: 40px 20px 20px 0;

    nav {
        font-size: 18px;
    }

    ul {
        display: grid;
        gap: 20px;
        .active:after {
            content: '';
            display: inline-block;
            position: absolute;
            bottom: -5px;
            left: 0;
            background-color: currentColor;
            height: 2px;
            width: 100%;
            border-radius: 10px;
            transition: width 0.3s;
        }
    }
    a{
        position: relative;
        padding: 0 2px;
    }
    a:after {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: -5px;
        left: 0;
        background-color: currentColor;
        height: 2px;
        width: 0;
        border-radius: 10px;
        transition: width 0.3s;
    }
    a:hover:after{
        width: 100%;
    }
`

export const S = {
    Sidebar,
}