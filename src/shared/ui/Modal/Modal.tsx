import { X } from 'lucide-react'
import { type MouseEvent, type ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/shared/ui/Button'

import { S } from './index'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children?: ReactNode
  questionConfirmation?: string
  onConfirmation?: () => void
  type?: 'confirmation'
}

export const Modal = ({
  children = 'no content',
  isOpen,
  onConfirmation,
  questionConfirmation = 'no question',
  setIsOpen,
  type,
}: Props) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleModal = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleConfirmation = () => {
    if (onConfirmation) {
      onConfirmation()
      setIsOpen(false)
    }
  }

  const modalContent = (
    <S.Modal onClick={handleModal}>
      <S.ModalContentWrap>
        <S.ModalClose onClick={handleClose}>
          <X />
        </S.ModalClose>
        <S.ModalContent>
          {type === 'confirmation' ? (
            <S.ModalConfirmation>
              <p>{questionConfirmation}</p>
              <S.ModalBtn>
                <Button onClick={handleConfirmation} variant="primary">
                  Yes
                </Button>
                <Button onClick={handleClose} variant="secondary">
                  No
                </Button>
              </S.ModalBtn>
            </S.ModalConfirmation>
          ) : (
            children
          )}
        </S.ModalContent>
      </S.ModalContentWrap>
    </S.Modal>
  )

  return createPortal(isOpen ? modalContent : null, document.body)
}
