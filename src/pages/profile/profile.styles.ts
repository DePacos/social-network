import styled from "styled-components";


const Profile = styled.div
    `
    `


const Post = styled.ul
    `
        display: grid;
        row-gap: 40px;
        margin-bottom: 40px;

        li {
            display: grid;
            grid-template-columns: 100px 1fr;
            grid-template-rows: max-content 1fr;
            column-gap: 20px;
            row-gap: 10px;
        }
        
        p {
            align-self: start;
            grid-column: 2 / 3;
        }

        img {
            grid-row: 1 / 3;
        }
    `

const WrapAddPost = styled.div
`
    text-align: right;
    max-width: 600px;
    
    textarea{
        display: block;
        width: 100%;
        margin-bottom: 20px;
        padding: 10px;
        font-size: 14px;
        min-height: 90px;
    }
    button{
        font-size: 16px;
        padding: 10px 20px;
        background-color: #0f9bcb;
        border-radius: 10px;
        max-width: 110px;
        transition: transform .3s;
        &:hover{
            transform: scale(1.05);
        }
    }
`

export const S = {
    Profile,
    Post,
    WrapAddPost,
}