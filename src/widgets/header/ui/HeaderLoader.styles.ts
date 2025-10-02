import Skeleton from 'react-loading-skeleton'

import styled from 'styled-components'

const HeaderLoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -15px;
`

const HeaderLoader = styled(Skeleton)`
  height: 10px;
`

export const S = {
  HeaderLoaderWrapper,
  HeaderLoader,
}
