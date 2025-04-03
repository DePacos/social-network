import styled from 'styled-components'

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Users = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 500px;
  overflow-y: auto;
  margin: 0 auto;
  padding: 20px;
  gap: 15px;
  box-shadow: 0 0 2px 1px;
  border-radius: 10px;
`

const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  padding: 15px;
  border: 1px solid;
  border-radius: 15px;
  overflow: hidden;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    height: 100%;
  }
  .wrap-img {
    flex-grow: 1;
  }
  svg,
  img {
    margin-bottom: 20px;
  }
  span {
    display: block;
  }
  img {
    width: 160px;
    border-radius: 15px;
  }
`

export const S = {
  UserItem,
  Users,
  UsersContainer,
}
