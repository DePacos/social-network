import { lazy } from 'react'

export const App = lazy(() => import('@/app/App'))
export const SignIn = lazy(() => import('@/features/auth/ui/SignIn'))
export const Profile = lazy(() => import('@/pages/profile/ui/Profile'))
export const Dialog = lazy(() => import('@/pages/dialogs/ui/Dialog'))
export const Dialogs = lazy(() => import('@/pages/dialogs/ui/Dialogs'))
export const Users = lazy(() => import('@/pages/users/ui/Users'))
export const Chat = lazy(() => import('@/pages/chat/ui/Chat'))
