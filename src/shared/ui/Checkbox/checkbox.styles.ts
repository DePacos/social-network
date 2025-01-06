import check from '@/shared/assets/icons/check.svg'
import styled, { css } from 'styled-components'

const CheckboxWrap = styled.div<{
  disabled?: boolean
}>`
  .error {
    position: absolute;
    display: block;
    font-size: 14px;
    padding: 0 0 0 25px;
    color: red;
  }

  input {
    display: none;
    cursor: pointer;
  }

  input ~ label {
    position: relative;
    padding-left: 25px;
    user-select: none;
  }

  input ~ label::after {
    content: '';
    position: absolute;
    cursor: pointer;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid currentColor;
    border-radius: 5px;
  }

  input:checked ~ label::after {
    content: '';
    background: url(${check}) center #cb5b0f;
  }

  ${({ disabled }) => css`
    ${disabled &&
    css`
      opacity: 0.7;
      input ~ label::after {
        cursor: default;
      }
    `}
  `}
`

export const S = {
  CheckboxWrap,
}
