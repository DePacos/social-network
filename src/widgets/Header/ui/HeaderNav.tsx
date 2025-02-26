import React from 'react'
import { Link } from 'react-router-dom'

import { S } from '@/widgets/Header/ui/header.styles'

export const HeaderNav = () => {
  return (
    <S.HeaderNav>
      <ul>
        <li>
          <Link to={'/members'}>Home</Link>
        </li>
        <li>
          <Link to={'/dialogs'}>Dialogs</Link>
        </li>
        <li>
          <Link to={'/chat'}>Chat</Link>
        </li>
      </ul>
    </S.HeaderNav>
  )
}
