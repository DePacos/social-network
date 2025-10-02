import { type PropsWithChildren, Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'

export const SuspenseProvider = ({ children }: PropsWithChildren) => {
  return <Suspense fallback={<Skeleton height="100vh" />}>{children}</Suspense>
}
