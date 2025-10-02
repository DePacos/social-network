import { usePagination } from '@/pages/users/model/usePagination'

import { S } from './Pagination.styles.ts'

type Props = {
  currentPage: number
  total: number
  pageItems: number
  setCurrentPage: (page: number) => void
  term: string
  callback?: () => void
}

export const Pagination = ({
  callback,
  currentPage,
  pageItems,
  setCurrentPage,
  term,
  total,
}: Props) => {
  const { generatePagination, handlePageChange } = usePagination({
    callback,
    currentPage,
    pageItems,
    setCurrentPage,
    term,
  })

  return (
    <S.Pagination>
      {generatePagination(currentPage, pageItems, total).map((page, i) =>
        page === '...' ? (
          <li key={i} className="dots">
            {page}
          </li>
        ) : (
          <li
            key={i + page}
            className={
              (currentPage === Number(page) ? 'active' : '') + ' number'
            }
            onClick={() => handlePageChange(Number(page))}
          >
            {page}
          </li>
        ),
      )}
    </S.Pagination>
  )
}
