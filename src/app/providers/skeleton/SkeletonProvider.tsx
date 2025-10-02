import type { PropsWithChildren } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

export const SkeletonProvider = ({ children }: PropsWithChildren) => {
  return <SkeletonTheme baseColor="#6aaebf">{children}</SkeletonTheme>
}
