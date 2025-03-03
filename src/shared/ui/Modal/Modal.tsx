import { X } from 'lucide-react'
import React, { MouseEvent, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '@/shared/ui/Button/Button'

import { S } from './modal.styles'

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
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

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
                <Button onClick={handleConfirmation} variant={'primary'}>
                  Yes
                </Button>
                <Button onClick={handleClose} variant={'secondary'}>
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
