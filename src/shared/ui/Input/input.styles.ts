import { ReactNode } from 'react'

import styled, { css } from 'styled-components'

const LabelWrap = styled.div<{ label?: string | undefined }>`
  .error {
    position: absolute;
    font-size: 14px;
    padding: 5px 0 0 5px;
    color: red;
  }

  ${({ label }) =>
    label &&
    css`
      label {
        display: block;
        padding: 5px 0 5px 5px;
      }
    `}
`

const InputWrap = styled.div<{
  error?: boolean | undefined
  iconStart?: ReactNode | undefined
  iconEnd?: ReactNode | undefined
  iconPadding?: string | undefined
}>`
  & {
    display: flex;
    position: relative;
  }

  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  & svg:first-child {
    left: 15px;
  }

  & svg:last-child {
    right: 15px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-radius: 15px;
  }

  ${({ iconEnd, iconPadding, iconStart }) => css`
    ${iconStart &&
    css`
      input {
        padding-left: ${iconPadding}px;
      }
    `}
    ${iconEnd &&
    css`
      input {
        padding-right: ${iconPadding}px;
      }
    `}
          ${iconStart &&
    iconEnd &&
    css`
      input {
        padding: 0 ${iconPadding}px;
      }
    `}
  `}

  ${({ error }) =>
    error &&
    css`
      input,
      input:focus-visible {
        border: none;
        outline: 2px solid red;
      }
    `}
`

export const S = {
  InputWrap,
  LabelWrap,
}
