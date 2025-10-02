import { type ChangeEvent, useState } from 'react'

import { useDebounce } from '@/app/hooks'

export const useSearch = (callback: (value: string) => void) => {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')
  const { debouncedCallback } = useDebounce(searchValue =>
    callback(searchValue),
  )

  const handleSearchResult = () => {
    callback('')
    setSearchValue('')
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.currentTarget.value

    setSearchValue(eventValue)
    debouncedCallback(eventValue)

    if (eventValue.length > 30) {
      setError('Maximum value of 30 characters')
    } else {
      setError('')
    }
  }

  return {
    error,
    handleSearch,
    handleSearchResult,
    searchValue,
  }
}
