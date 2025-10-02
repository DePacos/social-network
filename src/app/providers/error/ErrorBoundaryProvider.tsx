import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Error } from '@/pages/error'

export const ErrorBoundaryProvider = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary
      children={children}
      fallback={<Error title="Something went wrong" />}
    />
  )
}
