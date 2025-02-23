import { useEffect, useRef, useState } from 'react'

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownBtnRef = useRef<HTMLButtonElement>(null)

  const handlerOpen = () => {
    setIsOpen(prev => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropDownBtnRef.current) {
      if (!dropDownBtnRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  return {
    dropDownBtnRef,
    handlerOpen,
    isOpen,
  }
}
