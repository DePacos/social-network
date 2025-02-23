import { ChangeEvent, useCallback, useState } from 'react'

export const useSearch = (callback: (value: string) => void) => {
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')

  const handleSearchResult = () => {
    callback('')
    setSearchValue('')
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.currentTarget.value

    setSearchValue(eventValue)
    callDebounce(eventValue)

    if (eventValue.length > 30) {
      setError('Maximum value of 30 characters')
    } else {
      setError('')
    }
  }

  const debounce = <T extends (...args: any[]) => void>(
    callBack: T,
    delay: number = 200,
  ) => {
    let timeOut: ReturnType<typeof setTimeout>

    return (...arg: Parameters<T>) => {
      clearTimeout(timeOut)

      timeOut = setTimeout(() => {
        callBack(...arg)
      }, delay)
    }
  }

  const callDebounce = useCallback(
    debounce((searchValue: string) => callback(searchValue)),
    [],
  )

  return {
    error,
    handleSearch,
    handleSearchResult,
    searchValue,
  }
}
