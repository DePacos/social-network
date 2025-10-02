import { type ReactNode } from 'react'

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

const InputWrap = styled.div.withConfig({
  shouldForwardProp: prop =>
    prop !== 'error' &&
    prop !== 'iconStart' &&
    prop !== 'iconEnd' &&
    prop !== 'iconPadding',
})<{
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
    height: 35px;
    padding: 0 15px;
    border-radius: 10px;
  }

  ${({ iconEnd, iconPadding, iconStart }) => css`
    ${Boolean(iconStart) &&
    css`
      input {
        padding-left: ${iconPadding}px;
      }
    `}
    ${Boolean(iconEnd) &&
    css`
      input {
        padding-right: ${iconPadding}px;
      }
    `}
        ${Boolean(iconStart && iconEnd) &&
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
