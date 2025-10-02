import { type MouseEvent, useState } from 'react'

export const useSelect = (onChange: ((value: string) => void) | undefined) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTrigger = () => {
    setIsOpen(prevState => !prevState)
  }

  const handleOption = (e: MouseEvent<HTMLDivElement>) => {
    setIsOpen(false)
    const target = e.target as HTMLOptionElement

    onChange?.(target.value)
  }

  return {
    handleOption,
    handleTrigger,
    isOpen,
  }
}
