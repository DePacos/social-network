import styled, { css } from 'styled-components'

const Search = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
  width: 100%;
  max-width: 600px;

  input {
    max-width: 600px;
    width: 100%;
    height: 40px;
    justify-self: end;
    padding: 10px;
    border: none;
    border-radius: 10px;

    &:focus-visible {
      outline: 2px solid #0c9bd4;
    }
  }
`

const SearchResWrap = styled.div`
  position: relative;
`
const SearchRes = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'searchValue',
})<{
  searchValue: string
}>`
  position: absolute;
  width: 100%;
  max-height: 350px;
  overflow: hidden;
  overflow-y: auto;
  padding: 10px 15px;
  margin-top: 5px;
  border-radius: 10px;
  opacity: 1;
  z-index: 5;
  transform: translateY(0px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  ${({ searchValue }) => css`
    ${!searchValue &&
    css`
      opacity: 0;
      transform: translateY(-10px);
    `}
  `}
  li a {
    display: flex;
    font-size: 14px;
    padding: 6px;
  }

  li + li {
    border-top: 1px solid #444;
  }

  & li:hover {
    box-shadow: 0 1px 3px 1px;
  }
`

const SearchResItem = styled.ul`
  display: flex;
  flex-direction: column;

  li a {
    display: flex;
    font-size: 14px;
    padding: 6px;
  }

  li + li {
    border-top: 1px solid #444;
  }

  & li:hover {
    box-shadow: 0 1px 3px 1px;
  }
`

export const S = {
  Search,
  SearchRes,
  SearchResItem,
  SearchResWrap,
}
