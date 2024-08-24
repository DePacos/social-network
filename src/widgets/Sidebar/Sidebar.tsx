import React from "react"
import { NavLink } from "react-router-dom"
import { S } from "./Sidebar_Styles"

export const Sidebar = () => {
  return (
    <S.Sidebar>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/messages">Messages</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/setting">Setting</NavLink>
          </li>
        </ul>
      </nav>
    </S.Sidebar>
  )
}
