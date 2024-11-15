import React from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import App from "../App"
import { ErrorPage } from "@/pages/errorPage/ErrorPage"
import Profile from "@/pages/profile/Profile"
import Messages from "@/features/messages/Messages"
import Users from "@/pages/users/Users"

export const router = createBrowserRouter([
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
        path: "404",
        element: <ErrorPage />,
      },
    ],
  },
])
