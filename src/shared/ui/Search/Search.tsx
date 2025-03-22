import React, { ReactNode } from 'react'

import { Input } from '@/shared/ui/Input/Input'
import { useSearch } from '@/shared/ui/Search/Model/useSearch'

import { S } from './search.styles'

type Props = {
  placeholder?: string
  searchItems?: ReactNode[]
  callback: (value: string) => void
}

export const Search = ({ callback, placeholder, searchItems }: Props) => {
  const { error, handleSearch, handleSearchResult, searchValue } =
    useSearch(callback)

  return (
    <S.SearchResWrap>
      <Input
        value={searchValue}
        maxLength={31}
        error={error}
        type={'search'}
        onChange={handleSearch}
        placeholder={placeholder}
      />
      {searchItems && (
        <S.SearchRes
          onClick={handleSearchResult}
          searchValue={error ? '' : searchValue}
        >
          {searchItems.length > 0 ? searchItems : <li>No found</li>}
        </S.SearchRes>
      )}
    </S.SearchResWrap>
  )
}
