import React from 'react'

import page404 from '@/shared/assets/images/404.webp'

import { S } from './error.styles'

export class Error extends React.Component {
  render() {
    return (
      <S.Wrapper>
        <h1>Sorry, page no found</h1>
        <img alt={'appError-page'} src={page404}></img>
      </S.Wrapper>
    )
  }
}
