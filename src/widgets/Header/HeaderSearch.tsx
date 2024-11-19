import React, { Component, createRef, RefObject } from "react"
import { S } from "@/widgets/Header/header.styles"
import { Link } from "react-router-dom"
import { clearSearchUsers, fetchSearchUsers } from "@/entities/reducers/usersReducer"
import { AppRootState, User } from "@/app/types/types"
import { connect } from "react-redux"
import { fetchProfile } from "@/entities/reducers/profileReducer"

class HeaderSearch extends Component<Props, {searchValue: string}>{
  searchContainerRef: RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)

    this.searchContainerRef = createRef<HTMLDivElement>()
    this.state = {
      searchValue: ""
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside)
  }

  handleClickOutside = (event: MouseEvent) => {
    if (
      this.searchContainerRef.current &&
      !this.searchContainerRef.current.contains(event.target as Node)
    ) {
      this.setState({ searchValue: '' })
      this.props.clearSearchUsers()
    }
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value
    this.setState({ searchValue: currentValue })

    if (currentValue.length === 0) {
      this.props.clearSearchUsers()
    }else {
      this.props.fetchSearchUsers(currentValue)
    }
  }

  handlerSearchItem = (user: number) => {
    this.props.fetchProfile(user)
    this.props.clearSearchUsers()
  }

  render() {
    const { searchUsers } = this.props
    return (
      <S.HeaderSearch ref={this.searchContainerRef}>
        <input
          onChange={this.handleSearchChange}
          value={this.state.searchValue}
          type="search"
          name="search"
          id="searchId"
          placeholder="search users"
        />
        <S.HeaderSearchResWrap>
          <S.HeaderSearchRes searchValue={this.state.searchValue}>
            <S.HeaderSearchResItem>
              { searchUsers.length !== 0
                ? searchUsers.map((user) => (
                  <li>
                    <Link onClick={() => this.handlerSearchItem(user.id)} to={`/profile/${String(user.id)}`}>
                      {user.name}
                    </Link>
                  </li>
                ))
                : <li>nothing found</li>
              }
            </S.HeaderSearchResItem>
          </S.HeaderSearchRes>
        </S.HeaderSearchResWrap>
      </S.HeaderSearch>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  searchUsers: state.users.searchUsers
})

const mapDispatchToProps = {
  fetchSearchUsers,
  clearSearchUsers,
  fetchProfile,
}

type Props = {
  fetchSearchUsers: (filter: string) => Promise<void>
  clearSearchUsers: () => ReturnType<typeof clearSearchUsers>
  fetchProfile: (userId: number) => void
  searchUsers: User[]
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)