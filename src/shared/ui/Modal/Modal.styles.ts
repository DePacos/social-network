import styled from 'styled-components'

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  bottom: 0;
  z-index: 9;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContentWrap = styled.div`
  position: relative;
  max-width: 500px;
  border: 1px solid #fff;
  border-radius: 10px;
  @media (max-width: 480px) {
    margin: 0 30px;
  }
`
const ModalContent = styled.div`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
`

const ModalClose = styled.div`
  position: absolute;
  right: -25px;
  top: -25px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`
const ModalBtn = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  button {
    font-size: 18px;
  }
`

const ModalConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 20px;
`

export const S = {
  Modal,
  ModalBtn,
  ModalClose,
  ModalConfirmation,
  ModalContent,
  ModalContentWrap,
}
