import React, { Component } from "react"
import { generatePagination } from "../../app/utils/generatePagination"
import { AppRootState, Page, UsersResponse } from "../../app/types/types"
import { S } from "./Pagination_Styles"
import {
  changePagination,
  fetchUsers,
  setPage,
} from "../../entities/reducers/usersReducer"
import { connect } from "react-redux"

class Pagination extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (prevProps.totalCount !== this.props.totalCount && this.props.totalCount > 0) {
      this.props.changePagination(generatePagination(this.props.totalCount, this.props.pageItems, this.props.currentPage))
    }
  }

  render() {
    const {
      currentPage,
      paginationData,
      pageItems,
      totalCount,
      changePagination,
      fetchUsers,
      setPage
    } = this.props

    const paginationHandler = (num: number) => {
      fetchUsers(num, pageItems)
      setPage(num)
      changePagination(generatePagination(totalCount, pageItems, num))
    }

    const pagination = paginationData.map((item: number, i) => {
      return (
        <S.Li currentPage={currentPage === item} key={i}>
          {item === -1
            ? <span>...</span>
            : <a onClick={() => paginationHandler(item)}>{item}</a>
          }
        </S.Li>
      )
    })
    return (
      <nav>
        <S.Ul>{pagination}</S.Ul>
      </nav>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  paginationData: state.users.paginationData,
  currentPage: state.users.currentPage,
  totalCount: state.users.totalCount,
})

const mapDispatchToProps = {
  fetchUsers: fetchUsers,
  changePagination: changePagination,
  setPage: setPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

type Actions = {
  fetchUsers: (currentPage: number, userCount: number) => void
  changePagination: (
    pagination: number[],
  ) => ReturnType<typeof changePagination>
  setPage: (pagination: number) => ReturnType<typeof setPage>
}

type Props = Omit<UsersResponse, "items" | "error"> & Page & Actions
