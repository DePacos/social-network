export const generatePagination = (lenPagination: number, num: number = 1) => {
  let numArr: number[] = []
  if (num < 6) {
    for (let i = 1; i <= 10; i++) {
      numArr.push(i)
    }
  } else if (lenPagination - num > 5) {
    for (let i = num - 5; i <= num + 5; i++) {
      numArr.push(i)
    }
  } else {
    for (let i = lenPagination - 10; i <= lenPagination; i++) {
      numArr.push(i)
    }
  }
  return numArr
}
