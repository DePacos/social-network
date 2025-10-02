import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ROUTES } from '@/app/constants'
import { Error } from '@/pages/error/Error'

import {
  App,
  Chat,
  Dialog,
  Dialogs,
  Profile,
  SignIn,
  Users,
} from './LazyRouterComponents'

export const AppRouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <App />,
      errorElement: <Error title="Something went wrong" />,
      children: [
        { index: true, element: <Users /> },
        { path: ROUTES.PROFILE + '/:id', element: <Profile /> },
        { path: ROUTES.CHAT, element: <Chat /> },
        {
          path: ROUTES.DIALOGS,
          element: <Dialogs />,
          children: [{ path: ':id', element: <Dialog /> }],
        },
      ],
    },
    { path: ROUTES.SIGN_IN, element: <SignIn /> },
  ])

  return <RouterProvider router={router} />
}
