import styled, { css } from 'styled-components'

const TextAreaWrap = styled.div<{
  wrapStyles?: { [key: string]: string | number }
}>`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }

  span {
    color: red;
    position: absolute;
    bottom: -20px;
  }

  ${({ wrapStyles }) => css`
    ${{ ...wrapStyles }}
  `}
`

const TextArea = styled.textarea<{
  error: string | undefined
  textAreaStyles?: { [key: string]: string | number }
}>`
  resize: none;
  min-height: 75px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;

  ${({ error }) =>
    error &&
    css`
      &,
      &:focus-visible {
        border: none;
        outline: 2px solid red;
      }
    `}

  ${({ textAreaStyles }) => css`
    ${{ ...textAreaStyles }}
  `}
`

export const S = { TextArea, TextAreaWrap }
