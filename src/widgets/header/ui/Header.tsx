import { Link } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import { selectAppIsLoading } from '@/entities/slices/appSlice.ts'
import logo from '@/shared/assets/images/logo.webp'

import { S } from './Header.styles.ts'
import { HeaderBtn } from './HeaderBtn'
import { HeaderLoader } from './HeaderLoader'
import { HeaderNav } from './HeaderNav'
import { HeaderProfileMenu } from './HeaderProfileMenu'

export const Header = () => {
  const isLoading = useAppSelector(selectAppIsLoading)
  return (
    <S.Header>
      <S.HeaderWrap>
        <S.HeaderLogo>
          <Link to="/">
            <img src={logo} alt="logo" />
            <span>SocialNetwork</span>
          </Link>
        </S.HeaderLogo>
        <HeaderNav />
        <HeaderBtn />
        <HeaderProfileMenu />
      </S.HeaderWrap>
      {isLoading && <HeaderLoader />}
    </S.Header>
  )
}
