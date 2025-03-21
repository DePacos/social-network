import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { SignIn } from '@/features/auth/ui/SignIn'
import { Chat } from '@/pages/chat/Chat'
import { Dialog } from '@/pages/dialogs/ui/Dialog'
import { Dialogs } from '@/pages/dialogs/ui/Dialogs'
import { Error } from '@/pages/error/Error'
import { Profile } from '@/pages/profile/ui/Profile'
import { Members } from '@/pages/users/Members'

import { App } from '../App'

export const router = createBrowserRouter([
  {
    element: <SignIn />,
    path: '/signin',
  },
  {
    children: [
      {
        element: <Navigate to={'/members'} />,
        index: true,
      },
      {
        element: <Members />,
        path: 'members',
      },
      {
        element: <Chat />,
        path: 'chat',
      },
      {
        children: [
          {
            element: <Dialog />,
            path: ':id',
          },
        ],
        element: <Dialogs />,
        path: 'dialogs',
      },
      {
        element: <Dialog />,
        path: 'dialogs/:id',
      },
      {
        element: <Profile />,
        path: 'profile/:id',
      },
      {
        element: <Error />,
        path: '404',
      },
    ],
    element: <App />,
    errorElement: <Navigate to={'/404'} />,
    path: '/',
  },
])
