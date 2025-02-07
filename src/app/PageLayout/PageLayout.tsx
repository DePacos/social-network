import React, { ReactNode } from 'react'

import { S } from './pageLayout.styles'

type Props = {
  button?: ReactNode
  title: string
  image: string
  children?: ReactNode
}

export const PageLayout = ({ button, children, image, title }: Props) => {
  return (
    <S.PageLayoutSection>
      <S.PageLayoutTitle imageBg={image}>
        {button && <S.PageLayoutBtn>{button}</S.PageLayoutBtn>}
        <h1>{title}</h1>
      </S.PageLayoutTitle>
      <S.PageLayoutContentWrap>
        <S.PageLayoutContent>{children}</S.PageLayoutContent>
      </S.PageLayoutContentWrap>
    </S.PageLayoutSection>
  )
}
