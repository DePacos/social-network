import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver'
import { useAppDispatch } from '@/app/hooks/useStateHook'
import { getUsers, selectUsers } from '@/entities/reducers/usersSlice'

export const useUsers = () => {
  const dispatch = useAppDispatch()
  const users = useSelector(selectUsers)

  const triggerRef = useRef(null)
  const isFetchingRef = useRef(false)
  const usersContainerRef = useRef<HTMLUListElement>(null)

  const [term, setTerm] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageItems, setPageItems] = useState<number>(25)

  const observeOnLastItem = (index: number) =>
    Math.ceil(users.totalCount / pageItems) !== currentPage &&
    index === users.items.length - 1 &&
    users.items.length >= pageItems

  const handleTrigger = async () => {
    if (isFetchingRef.current) return

    isFetchingRef.current = true

    await dispatch(
      getUsers({
        countUsersInPage: pageItems,
        pageNumber: currentPage + 1,
        term,
      }),
    )

    setCurrentPage(prev => prev + 1)

    isFetchingRef.current = false
  }

  useIntersectionObserver(triggerRef, handleTrigger, { rootMargin: '50px' })

  const handleScrollToTop = () => {
    if (usersContainerRef.current) {
      usersContainerRef.current.scrollTop = 0
    }
  }

  const handleSearch = (value: string) => {
    setTerm(value)
    setCurrentPage(1)
    handleScrollToTop()
    dispatch(
      getUsers({
        cleanUsers: true,
        countUsersInPage: pageItems,
        pageNumber: currentPage,
        term: value,
      }),
    )
  }

  useEffect(() => {
    dispatch(getUsers({ countUsersInPage: pageItems, pageNumber: currentPage }))
  }, [])

  return {
    currentPage,
    handleScrollToTop,
    handleSearch,
    observeOnLastItem,
    pageItems,
    setCurrentPage,
    term,
    triggerRef,
    users,
    usersContainerRef,
  }
}
