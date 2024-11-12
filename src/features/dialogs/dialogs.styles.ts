import styled from "styled-components";



const DialogsWrap = styled.div
    `
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 1fr 70px;
        margin-bottom: 30px;
    `

const Contacts = styled.div
    `
        grid-row: 1 / 3;
        li + li {
            margin-top: 20px;
        }

        a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 5px 10px;
            width: max-content;
            transition: transform .3s;
        }
        
        .active{
            background-color: #0c9bd4;
            border-radius: 15px;
        }

        a:hover {
            transform: scale(1.05);
        }
    `

export const S = {
    DialogsWrap,
    Contacts,
}
