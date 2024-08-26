import React from "react"
import { S } from "./Article_Styles"
import { Outlet } from "react-router-dom"

export const Article = () => {
  return (
    <S.Article>
      <Outlet />
    </S.Article>
  )
}
