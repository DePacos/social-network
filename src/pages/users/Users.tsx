import React from "react"
import { AppRootState, User } from "@/app/types/types"
import { connect } from "react-redux"
import { S } from "./users.styles"
import { changePageItems, fetchUsers } from "@/entities/reducers/usersReducer"
import Pagination from "./Pagination"
import { Link } from "react-router-dom"
import "react-loading-skeleton/dist/skeleton.css"
import { SkeletonStyled } from "@/app/styles/global.styles"
import userCap from "@/shared/assets/images/user-cap.webp"
class Users extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, changePageItems, pageItems, isLoading, fetchUsers, currentPage } = this.props

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const pageItems = +e.target.value
      changePageItems(pageItems)
      fetchUsers(currentPage, pageItems)
    }

    return (
      <S.Wrapper>
        <h1>Users</h1>
        <select value={pageItems} onChange={selectHandler}>
          <option>5</option>
          <option selected>10</option>
          <option>15</option>
          <option>20</option>
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
                      <img src={user.photos.small ? user.photos.small : userCap} alt="user-img" />
                      <h2>
                        <Link to={`/profile/${String(user.id)}`}>
                          {user.name}
                        </Link>
                      </h2>
                      <p>{user.followed ? 'followed' : 'no followed'}</p>
                      <p>{user.status ? user.status : ''}</p>
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
  currentPage: state.users.currentPage,
  isLoading: state.app.isLoading,
})

type Props = {
  users: User[]
  fetchUsers: (pageNumber?: number, countUsersInPage?: number) => void
  currentPage: number
  pageItems: number
  changePageItems: (pageItems: number) => void
  isLoading: boolean
}

export default connect(mapStateToProps, {
  fetchUsers,
  changePageItems
})(Users)
