import React from "react"
import { S } from "./Dialogs_Styles"
import { NavLink, Outlet } from "react-router-dom"
import { AppRootState } from "../../app/types/types"
import { connect } from "react-redux"

type DialogsProps = {
  users: any
}

class Dialogs extends React.Component<DialogsProps> {
  render() {
    const { users } = this.props

    return (
      <div>
        <h1>Messages</h1>
        <S.DialogsWrap>
          <S.Contacts>
            <ul>
              {users.map((user: any) => (
                <li key={user.id}>
                  <NavLink to={user.massagesId}>
                    <img src={user.avatar} alt="avatar" />
                    {user.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </S.Contacts>
          <Outlet />
        </S.DialogsWrap>
      </div>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  // users: state.dialogs,
})

export default connect()(Dialogs)
