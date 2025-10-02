import Skeleton from 'react-loading-skeleton'

import styled, { css } from 'styled-components'

import profileBg from '@/shared/assets/images/profile-bg.webp'

const profileSectionStyles = css`
  display: flex;
  justify-content: center;
`

const ProfileTitleWrap = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 0 5px 1px;
  border-radius: 15px;
  background:
    ${({ theme }) => theme.colors.overlay},
    url(${profileBg}) no-repeat center;
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

const ProfileBtnSetting = styled.div`
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

const Profile = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1400px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 15px;

  h2,
  h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ProfileSocial = styled.div`
  ${profileSectionStyles};
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;

  img {
    transition: transform 0.3s ease-in-out;
  }

  img:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 767px) {
    text-align: center;
    grid-column: 1/4;
    grid-row: 3;
  }
`
const ProfileInfo = styled.div`
  ${profileSectionStyles};
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  height: 100%;
  gap: 20px;
  position: relative;
  top: -60px;
  font-size: 30px;

  p {
    word-break: break-all;
  }

  & > p {
    font-size: 22px;
    text-align: center;
  }

  img + p {
    font-size: 28px;
  }

  p:nth-child(odd) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  img {
    margin: 0 auto;
    display: block;
    width: 160px;
    border: 1px solid;
    border-radius: 15px;
  }

  label {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    grid-column: 1/4;
    grid-row: 1;
    margin-bottom: -60px;
  }
`
const ProfileAvatarSvg = styled.div`
  text-align: center;
`

const ProfileUploadImg = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px;
  margin-left: 80px;
  background-color: #cb5b0f;
  border-radius: 50%;
`

const ProfileAbout = styled.div`
  ${profileSectionStyles};
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0;
  height: 100%;

  button {
    margin-top: 30px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    text-align: center;
    grid-column: 1/4;
    grid-row: 2;
  }
`

const ProfileInputWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;

  & > div {
    width: 100%;
  }
`

const ProfileJobDesc = styled.div`
  margin-top: 10px;
`

const SkeletonAvatar = styled(Skeleton)`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #cbcbcb;
`

const SkeletonName = styled(Skeleton)`
  width: 130px;
  height: 20px;
  border-radius: 10px;
  background-color: #cbcbcb;
`

export const S = {
  Profile,
  ProfileAbout,
  ProfileAvatarSvg,
  ProfileBtnSetting,
  ProfileInfo,
  ProfileInputWrap,
  ProfileJobDesc,
  ProfileSocial,
  ProfileTitleWrap,
  ProfileUploadImg,
  SkeletonAvatar,
  SkeletonName,
}
