import { StrictMode } from 'react'

import { ErrorBoundaryProvider } from '@/app/providers/error'
import { AppRouterProvider } from '@/app/providers/router'
import { SkeletonProvider } from '@/app/providers/skeleton'
import { StoreProvider } from '@/app/providers/store'
import { SuspenseProvider } from '@/app/providers/suspense'
import { AppThemeProvider } from '@/app/providers/theme'

export const PROVIDERS = [
  StrictMode,
  AppThemeProvider,
  SkeletonProvider,
  ErrorBoundaryProvider,
  SuspenseProvider,
  StoreProvider,
  AppRouterProvider,
]
