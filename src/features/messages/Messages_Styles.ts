import styled from "styled-components";



const MessagesCurrentUser = styled.div
    `
        padding: 10px 15px;
        background-color: cadetblue;
        height: max-content;
        justify-self: end;
        border-radius: 10px;
    `
const MessagesContact = styled.div
    `
        padding: 10px 15px;
        background-color: #0c9bd4;
        height: max-content;
        justify-self: start;
        border-radius: 10px;
    `

const MessagesView = styled.div
    `
        display: grid;
        align-content: end;
        gap: 20px;
    `

const MessagesSend = styled.div
    `
        display: grid;
        grid-template-columns: 80% 20%;
        gap: 20px;
        grid-row: 2 / 3;
        padding-top: 30px;

        textarea {
            padding: 5px 10px;
            border-radius: 10px;
            overflow: hidden;
            resize: none;
        }

        button {
            background-color: #5f9ea0;
            border-radius: 10px;
            transition: transform .3s;
        }

        button:hover {
            transform: scale(1.05);
        }
    `

export const S = {
    MessagesView,
    MessagesContact,
    MessagesCurrentUser,
    MessagesSend,
}