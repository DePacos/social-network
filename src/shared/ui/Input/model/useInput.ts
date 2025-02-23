import { useCallback, useId, useState } from 'react'

export const useInput = (type: string) => {
  const [inputType, setInputType] = useState(type)
  const inputId = useId()

  const handleChangeType = useCallback(() => {
    setInputType(prev => (prev === 'password' ? 'text' : 'password'))
  }, [])

  return {
    handleChangeType,
    inputId,
    inputType,
  }
}
