import React from "react"
import { AppRootState, User } from "../../app/types/types"
import { connect } from "react-redux"
import { S } from "./Users_Styles"
import { changePageItems, fetchUsers } from "../../entities/users/usersReducer"
import Pagination from "./Pagination"
import { Link } from "react-router-dom"
import "react-loading-skeleton/dist/skeleton.css"
import { SkeletonStyled } from "../../app/styles/GlobalStyles"

class Users extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchUsers(1)
  }

  render() {
    const { users, changePageItems, pageItems, isLoading } = this.props
    console.log("isLoading", isLoading)
    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      changePageItems(+e.target.value)
    }

    return (
      <S.Wrapper>
        <h1>Users</h1>
        <select onChange={selectHandler}>
          <option>10</option>
        </select>
        {isLoading ? (
          <S.Users>
            {users.map((user) => (
              <SkeletonStyled key={user.id} baseColor={"#9c9c9c"} count={3} />
            ))}
          </S.Users>
        ) : (
          <S.Users>
            {users
              ? users.map((user) => {
                  return (
                    <li key={user.id}>
                      <img src={user.img} alt="user-img" />
                      <h2>
                        <Link to={`/profile/${String(user.id)}`}>
                          {user.name}
                        </Link>
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
        )}
        <Pagination pageItems={pageItems} />
      </S.Wrapper>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  users: state.users.items,
  pageItems: state.users.pageItems,
  isLoading: state.app.isLoading,
})

const mapDispatchToProps = {
  fetchUsers: fetchUsers,
  changePageItems: changePageItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

type Props = {
  users: User[]
  fetchUsers: (currentPage: number) => void
  pageItems: number
  changePageItems: (pageItems: number) => ReturnType<typeof changePageItems>
  isLoading: boolean
}
