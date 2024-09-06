import React, { Component } from "react"
import { generatePagination } from "../../app/utils/generatePagination"
import { AppRootState, Page, UsersResponse } from "../../app/types/types"
import { S } from "./Pagination_Styles"
import {
  changePagination,
  fetchUsers,
  setPage,
} from "../../entities/users/usersReducer"
import { connect } from "react-redux"

class Pagination extends Component<Props> {
  componentDidMount() {
    this.props.changePagination(generatePagination(this.props.pageItems))
  }

  render() {
    const { paginationData, currentPage, pageItems, totalCount } = this.props

    const paginationHandler = (num: number) => {
      const lengthPagination = Math.ceil(totalCount / pageItems)
      // TODO stop generation when first or last item is clicked
      this.props.fetchUsers(num)
      this.props.setPage(num)
      if (paginationData.at(-1) === num || paginationData.at(0) === num) {
        this.props.changePagination(generatePagination(lengthPagination, num))
      }
    }

    const pagination = paginationData.map((item: number) => {
      return (
        <S.Li currentPage={currentPage === item} key={item}>
          <a onClick={() => paginationHandler(item)}>{item}</a>
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
  fetchUsers: (currentPage: number) => void
  changePagination: (
    pagination: number[],
  ) => ReturnType<typeof changePagination>
  setPage: (pagination: number) => ReturnType<typeof setPage>
}

type Props = Omit<UsersResponse, "items" | "error"> & Page & Actions
