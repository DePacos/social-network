import styled from 'styled-components'

const DatePicker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  position: relative;

  input {
    color: ${({ theme }) => theme.colors.fontPrimary};
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
  }
  label {
    font-size: 16px;
    margin-bottom: 5px;
  }
  span {
    position: absolute;
    font-size: 14px;
    color: red;
    bottom: -18px;
    white-space: nowrap;
  }
`

export const S = {
  DatePicker,
}
