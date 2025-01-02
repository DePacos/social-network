import styled from 'styled-components'

const DropDownWrap = styled.div`
  position: relative;
`
const DropDownContent = styled.div`
  position: absolute;
  margin-top: 5px;
  padding: 15px;
  right: 0;
  min-width: 180px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`

export const S = {
  DropDownContent,
  DropDownWrap,
}
