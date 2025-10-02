import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/constants'
import page404 from '@/shared/assets/images/404.webp'
import { Button } from '@/shared/ui'

import { S } from './Error.styles.ts'

export const Error = ({ title }: { title: string }) => {
  return (
    <>
      <S.Wrapper>
        <div>
          <h1>{title}</h1>
          <img alt="error-page" src={page404}></img>
        </div>

        <Button variant="primary">
          <Link to={ROUTES.HOME}>Home page</Link>
        </Button>
      </S.Wrapper>
    </>
  )
}
