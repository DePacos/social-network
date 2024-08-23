import styled from "styled-components"

const Users = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 40px;

  li {
    display: grid;
    //grid-template-columns: 200px;
    //grid-template-rows: max-content 1fr;
    //column-gap: 20px;
    row-gap: 10px;
    padding: 10px;
    justify-items: center;
    text-align: center;
  }

  //p {
  //  align-self: start;
  //  grid-column: 2 / 3;
  //}
  //
  //img {
  //  grid-row: 1 / 3;
  //}
`

export const S = {
  Users,
}
