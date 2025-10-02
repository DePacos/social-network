import styled, { css } from 'styled-components'

import check from '@/shared/assets/icons/check.svg'

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
    cursor: pointer;
  }

  input ~ label::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    left: 0;
    width: 18px;
    height: 18px;
    border: 1px solid currentColor;
    border-radius: 5px;
  }

  input:checked ~ label::after {
    content: '';
    background: url("data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M20%206%209%2017l-5-5'/%3e%3c/svg%3e")
      center #cb5b0f;
    //background: url(${check}) center #cb5b0f;
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
