import styled from 'styled-components'

const DialogsWrap = styled.div`
  display: flex;
  gap: 60px;
  min-height: 520px;
  @media (max-width: 1200px) {
    gap: 20px;
  }
  @media (max-width: 640px) {
    gap: 10px;
    min-height: 330px;
  }
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 515px;
  padding: 7px;
  overflow-y: auto;

  a {
    margin-right: 12px;
  }
  img {
    width: 70px;
    border-radius: 50%;
  }
  @media (max-width: 1024px) {
    a img,
    a svg {
      width: 50px;
    }
    a svg {
      height: 50px;
    }
  }
  @media (max-width: 480px) {
    a img,
    a svg {
      width: 30px;
    }
    a svg {
      height: 30px;
    }
  }
`
const ContactList = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: 70px 140px 55px;
  align-items: center;
  padding: 10px;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 0 2px 1px;
  transition: transform 0.3s;
  overflow: hidden;

  li:nth-child(2) {
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 50px 140px 55px;
    li:first-child {
      grid-row: 1/3;
    }
    li:nth-child(2) {
      grid-column: 2/4;
    }
    li:last-child {
      grid-row: 2/3;
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    & {
      display: block;
      padding: 5px;
    }
    li:nth-child(2) {
      display: none;
    }
    li:last-child {
      display: none;
    }
  }

  @media (max-width: 480px) {
    & {
      width: max-content;
    }
  }

  &.active {
    box-shadow: 0 0 6px 4px;
    transform: scale(1.02);
  }

  &:hover {
    transform: scale(1.02);
  }
`

const NewMessages = styled.li`
  position: absolute;
  display: flex;
  gap: 5px;
  align-items: center;
  top: 5px;
  right: 5px;
  transform: translateX(-50%);
`

const LastActivity = styled.li`
  text-align: center;
  font-size: 14px;
`
const NoDialogMessage = styled.p`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`
const SearchSeparator = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
  &:hover {
    box-shadow: none !important;
  }
`

export const S = {
  ContactList,
  Contacts,
  DialogsWrap,
  LastActivity,
  NewMessages,
  NoDialogMessage,
  SearchSeparator,
}
