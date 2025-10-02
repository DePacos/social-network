import { type RefObject, useEffect } from 'react'

export const useIntersectionObserver = (
  ref: RefObject<Element | null>,
  callback: () => void,
  options?: IntersectionObserverInit,
) => {
  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback()
    }, options)

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [callback])
}
