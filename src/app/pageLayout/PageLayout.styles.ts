import styled from 'styled-components'

const PageLayoutSection = styled.section`
  margin-bottom: -90px;
`

const PageLayoutTitle = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'imageBg',
})<{ imageBg: string }>`
  position: relative;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 0 5px 1px;
  border-radius: 15px;
  background:
    ${({ theme }) => theme.colors.overlay},
    url(${props => props.imageBg}) no-repeat center;
  background-size: cover;

  h1 {
    position: absolute;
    text-align: center;
    padding-top: 130px;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 40px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 767px) {
    height: 270px;
    h1 {
      padding-top: 90px;
    }

    img {
      height: 100%;
    }
  }
`

const PageLayoutBtn = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: end;
  margin: 25px 25px 0;

  button {
    padding: 10px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    justify-content: center;
  }
`

const PageLayoutContentWrap = styled.div`
  position: relative;
  margin-top: -130px;
  padding: 0 20px;
  z-index: 5;
  @media (max-width: 640px) {
    padding: 5px;
  }
`
const PageLayoutContent = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  @media (max-width: 640px) {
    padding: 10px;
  }
`

export const S = {
  PageLayoutBtn,
  PageLayoutContent,
  PageLayoutContentWrap,
  PageLayoutSection,
  PageLayoutTitle,
}
