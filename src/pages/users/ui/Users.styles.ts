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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 220px;
  padding: 12px 16px;
  border: 1px solid;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.3s;

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
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
  }

  span {
    display: block;
  }

  img {
    border-radius: 15px;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 3px 2px;
  }
`

const UserStatus = styled.span`
  word-break: break-all;
  overflow: hidden;
`

const UserName = styled.span`
  font-weight: bold;
`

const UserFollow = styled.span`
  display: inline-block;
  position: absolute;
  top: 7px;
  right: 5px;
  font-size: 10px;
  padding: 3px 7px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.body};
`

export const S = {
  UserItem,
  Users,
  UsersContainer,
  UserStatus,
  UserName,
  UserFollow,
}
