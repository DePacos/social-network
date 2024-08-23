import React, { Dispatch } from "react"
import { AppRootState, User, UserType } from "../../app/types/types"
import { connect } from "react-redux"
import { S } from "./Users_Styles"
import { usersSlice } from "../../entities/users/usersSlice"

class Users extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users } = this.props
    return (
      <>
        <h1>Users</h1>
        <S.Users>
          {users
            ? users.map((user) => {
                return (
                  <li key={user.id}>
                    <img src={user.img} alt="user-img" />
                    <h2>
                      <a href="/public#">{user.name}</a>
                    </h2>
                    <p>
                      {user.body
                        ? user.body
                        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    </p>
                  </li>
                )
              })
            : "no users"}
        </S.Users>
      </>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  users: state.users,
})

const mapDispatchToProps = {
  fetchUsers: usersSlice.actions.fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

type Props = {
  users: User[]
  fetchUsers: any
}
