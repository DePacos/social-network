import React from "react"
import { S } from "./article.styles"
import { Outlet } from "react-router-dom"

export const Article = () => {
  return (
    <S.Article>
      <Outlet />
    </S.Article>
  )
}
