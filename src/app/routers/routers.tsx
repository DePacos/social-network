import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import App from "../App"
import { ErrorPage } from "@/pages/errorPage/ErrorPage"
import Profile from "@/pages/profile/Profile"
import Messages from "@/features/messages/Messages"
import Users from "@/pages/users/Users"
import EditProfile from "@/pages/profile/EditProfile"
import Login from "@/features/auth/Login"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "@/app/styles/global.styles"
import { socialThemeDark } from "@/app/styles/themeDark.styles"
import { manageThemeMode } from "@/app/utils/manageThemeMode"
import { socialThemeLight } from "@/app/styles/themeLight.styles"

const themeMode = manageThemeMode.get()

export const router = createBrowserRouter([
  { path: "/login",
    element:(
        <ThemeProvider theme={themeMode === "dark" ? socialThemeDark : socialThemeLight}>
          <GlobalStyles/>
          <Login />
        </ThemeProvider>
      )
  },
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to="/404" />,
    children: [
      {
        index: true,
        element: <Navigate to="/" />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/editprofile/:id",
        element: <EditProfile />,
      },
      {
        path: "404",
        element: <ErrorPage />,
      },
    ],
  },
])
