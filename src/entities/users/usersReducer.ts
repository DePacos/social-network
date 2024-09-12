import {
  UsersActions,
  Page,
  User,
  UsersResponse,
  AppActions,
} from "../../app/types/types"
import { usersAPI } from "../../shared/api/usersAPI"
import { Dispatch } from "react"
import { changeAppStatus } from "./appReducer"

const initialState: UsersResponse & Page = {
  items: [] as User[],
  totalCount: 0,
  currentPage: 1,
  pageItems: 10,
  paginationData: [],
  error: "",
}

export const usersReducer = (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        items: action.payload.users,
        totalCount: action.payload.totalUsers,
      }
    case "CHANGE_PAGINATION":
      return {
        ...state,
        paginationData: action.payload.pagination,
      }
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload.pageNumber,
      }
    case "CHANGE_PAGE_ITEMS":
      return {
        ...state,
        pageItems: action.payload.pageItems,
      }
    default:
      return state
  }
}

export const setUsers = (usersData: UsersResponse) =>
  ({
    type: "SET_USERS",
    payload: {
      users: usersData.items,
      totalUsers: usersData.totalCount,
    },
  }) as const

export const changePagination = (pagination: number[]) =>
  ({
    type: "CHANGE_PAGINATION",
    payload: { pagination },
  }) as const

export const setPage = (pageNumber: number) =>
  ({
    type: "SET_PAGE",
    payload: { pageNumber },
  }) as const

export const changePageItems = (pageItems: number) =>
  ({
    type: "CHANGE_PAGE_ITEMS",
    payload: { pageItems },
  }) as const

export const fetchUsers =
  (currentPage: number) => async (dispatch: Dispatch<UsersDispatch>) => {
    dispatch(changeAppStatus(true))
    try {
      const res = await usersAPI.fetchUsers(currentPage)
      dispatch(setUsers(res.data))
      dispatch(changeAppStatus(false))
    } catch (error) {
      console.log(error)
    }
  }

type UsersDispatch =
  | ReturnType<typeof setUsers>
  | ReturnType<typeof changeAppStatus>
