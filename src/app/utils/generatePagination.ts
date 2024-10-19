export const generatePagination = (totalCount: number, pageItems: number, currentPage: number) => {
  const lenPagination = Math.ceil(totalCount / pageItems)
  let numArr: number[] = []

  const rangeToShow = 5
  const startPage = Math.max(1, currentPage - Math.floor(rangeToShow / 2))
  const endPage = Math.min(lenPagination, startPage + rangeToShow - 1)

  if (startPage > 1) {
    numArr.push(1)
    if (startPage > 2) numArr.push(-1)
  }

  for (let i = startPage; i <= endPage; i++) {
    numArr.push(i)
  }

  if (endPage < lenPagination) {
    if (endPage < lenPagination - 1) numArr.push(-1)
    numArr.push(lenPagination)
  }

  return numArr
}