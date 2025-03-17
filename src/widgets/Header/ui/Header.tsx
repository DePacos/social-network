import React from 'react'
import { Link } from 'react-router-dom'

import logo from '@/shared/assets/images/logo.webp'
import { S } from '@/widgets/Header/ui/header.styles'
import { HeaderBtn } from '@/widgets/Header/ui/HeaderBtn'
import { HeaderNav } from '@/widgets/Header/ui/HeaderNav'
import { HeaderProfileMenu } from '@/widgets/Header/ui/HeaderProfileMenu'

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrap>
        <S.HeaderLogo>
          <Link to={'/'}>
            <img src={logo} alt={'logo'} />
            <span>SocialNetwork</span>
          </Link>
        </S.HeaderLogo>
        <HeaderNav />
        <HeaderBtn />
        <HeaderProfileMenu />
      </S.HeaderWrap>
    </S.Header>
  )
}
