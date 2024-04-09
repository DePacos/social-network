import styled from "styled-components";


const Posts = styled.ul
    `
        display: grid;
        row-gap: 40px;

        li {
            display: grid;
            grid-template-columns: 100px 1fr;
            grid-template-rows: max-content 1fr;
            column-gap: 20px;
            row-gap: 10px;
        }

        h1 {
            margin-bottom: 0;
        }

        p {
            align-self: start;
            grid-column: 2 / 3;
        }

        img {
            grid-row: 1 / 3;
        }
    `

export const S = {
    Posts
}