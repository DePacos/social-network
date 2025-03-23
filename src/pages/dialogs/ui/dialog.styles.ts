import styled from 'styled-components'

const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  box-shadow: 0 0 2px 1px;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin-top: 7px;
  }
`

const DialogHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  height: 130px;
  border-bottom: 1px solid;
  .dialog-avatar {
    display: flex;
    align-items: center;
    gap: 15px;
    position: relative;
    width: 100%;
    max-width: 250px;
    white-space: nowrap;

    @media (min-width: 1024px) {
      height: auto;
    }

    @media (min-width: 480px) {
      overflow: hidden;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: start;
      img,
      svg {
        margin-bottom: 15px;
      }
      p {
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 180px;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .dialog-update {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    text-align: center;
    button {
      margin-top: 5px;
    }
  }
  img {
    height: 60px;
    border-radius: 50%;
  }
  form {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 210px;
    align-items: center;
    button {
      font-size: 14px;
      padding: 6px 10px;
      width: max-content;
    }
  }
  @media (max-width: 1024px) {
    & {
      flex-direction: column;
    }
  }
`

const WrapDialogMessages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 350px;
  overflow-y: auto;
`

const DialogMessages = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  min-height: 0;
  li {
    padding: 10px;
    border-radius: 10px;
  }

  .recipient,
  .sender {
    button {
      position: absolute;
      top: 2px;
      padding: 5px;
      z-index: 9;
      opacity: 0;
      transition: 0.3s;
    }
    &:hover button {
      opacity: 1;
    }
  }

  .recipient {
    position: relative;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    align-self: flex-start;
    button {
      right: 2px;
      color: darkorange;
      background-color: ${({ theme }) => theme.colors.bgSecondary};
      transform: translateX(20px);
    }
    &:hover button {
      transform: translateX(0px);
    }
  }
  .sender {
    position: relative;
    background-color: ${({ theme }) => theme.colors.body};
    align-self: end;
    text-align: right;
    button {
      left: 2px;
      background-color: ${({ theme }) => theme.colors.body};
      transform: translateX(-20px);
    }
    &:hover button {
      transform: translateX(0px);
    }
  }
`

const DialogMessageInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 5px;
  font-size: 11px;
`
const DialogForm = styled.form`
  display: flex;
  gap: 15px;
  height: 75px;
  align-items: center;
  padding: 15px;
  border-top: 1px solid;
  div:first-child {
    width: 100%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    height: auto;
    button {
      width: 100%;
      padding: 10px 15px;
    }
  }
`

export const S = {
  Dialog,
  DialogForm,
  DialogHeader,
  DialogMessageInfo,
  DialogMessages,
  WrapDialogMessages,
}
