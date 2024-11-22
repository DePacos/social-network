import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    select {
        width: max-content;
        align-self: end;
        margin-bottom: 15px;
    }
`

const Users = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    column-gap: 15px;
    row-gap: 40px;
    margin-bottom: 40px;

    li {
        display: grid;
        row-gap: 15px;
        padding: 10px;
        justify-items: center;
        text-align: center;

        a {
            transition: .3s ease-in-out color;
        }

        a:hover {
            color: #17b1d7;
        }

        img {
            width: 120px;
        }
    }
`

export const S = {
  Users,
  Wrapper
}
