import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/constants'

import { S } from './Header.styles.ts'

export const HeaderNav = () => {
  return (
    <S.HeaderNav>
      <ul>
        <li>
          <Link to={ROUTES.DIALOGS}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.DIALOGS}>Dialogs</Link>
        </li>
        <li>
          <Link to={ROUTES.CHAT}>Chat</Link>
        </li>
      </ul>
    </S.HeaderNav>
  )
}
