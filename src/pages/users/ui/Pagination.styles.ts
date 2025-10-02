import styled from 'styled-components'

const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  li {
    padding: 10px;
  }

  .number {
    cursor: pointer;
  }
  .dots {
    cursor: default;
  }
  .active {
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 10px;
  }
`

export const S = {
  Pagination,
}
