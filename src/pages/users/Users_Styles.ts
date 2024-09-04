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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 40px;
  margin-bottom: 40px;

  li {
    display: grid;
    row-gap: 10px;
    padding: 10px;
    justify-items: center;
    text-align: center;
  }
`

export const S = {
  Users,
  Wrapper,
}
