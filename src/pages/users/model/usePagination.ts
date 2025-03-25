import { useAppDispatch } from '@/app/hooks/useStateHook'
import { getUsers } from '@/entities/reducers/usersSlice'

type Props = {
  currentPage: number
  pageItems: number
  setCurrentPage: (page: number) => void
  term: string
  callback?: () => void
}

export const usePagination = ({
  callback,
  currentPage,
  pageItems,
  setCurrentPage,
  term,
}: Props) => {
  const dispatch = useAppDispatch()

  const generatePagination = (
    currentPage: number,
    pageItems: number,
    totalCount: number,
  ) => {
    const paginationLength = Math.ceil(totalCount / pageItems)
    const pagination: string[] = []

    const rangeToShow = 5
    const startPagination = Math.max(
      1,
      currentPage - Math.floor(rangeToShow / 2),
    )
    const endPagination = Math.min(
      paginationLength,
      startPagination + rangeToShow - 1,
    )

    if (startPagination > 1) {
      pagination.push('1')
      if (startPagination > 2) pagination.push('...')
    }

    for (let i = startPagination; i <= endPagination; i++) {
      pagination.push(String(i))
    }

    if (endPagination < paginationLength) {
      if (endPagination < paginationLength - 1) pagination.push('...')
      pagination.push(String(paginationLength))
    }

    return pagination
  }

  const handlePageChange = (page: number) => {
    if (currentPage !== page) {
      setCurrentPage(page)
      dispatch(
        getUsers({
          cleanUsers: true,
          countUsersInPage: pageItems,
          pageNumber: page,
          term,
        }),
      )
    }
    if (callback) {
      callback()
    }
  }

  return {
    generatePagination,
    handlePageChange,
  }
}
