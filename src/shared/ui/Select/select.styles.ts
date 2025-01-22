import styled, { css } from 'styled-components'

const SelectWrap = styled.div`
  position: relative;
  min-width: 100px;
  width: max-content;

  span {
    position: absolute;
    font-size: 16px;
    white-space: nowrap;
    color: red;
    left: 5px;
    bottom: 0;
  }
`

const SelectButton = styled.button<{
  disabled?: boolean
  error: boolean
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: inset 0 0 2px 1px;
  }

  ${({ error }) =>
    error &&
    css`
      &,
      &:hover {
        box-shadow: inset red 0 0 0 2px;
      }
    `}
`
const OptionWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  option {
    padding: 5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.body};
    cursor: pointer;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 0 2px 1px;
    }
  }
`

export const S = {
  OptionWrap,
  SelectButton,
  SelectWrap,
}
