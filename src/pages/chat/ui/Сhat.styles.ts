import styled from 'styled-components'

const ChatMessages = styled.ul`
  height: 550px;
  overflow-y: scroll;
  margin-bottom: 5px;
  padding: 10px 20px;

  li {
    margin-bottom: 30px;
    padding: 10px;
    box-shadow: 0 0 5px 2px;
    border-radius: 10px;
    transition: box-shadow 0.3s;
  }

  li:hover {
    box-shadow: 0 0 10px 3px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 20px;
    max-height: 60px;
  }

  img {
    width: 40px;
    border-radius: 50%;
  }

  .message {
    max-height: 40px;
    overflow-y: scroll;
  }

  .name {
    width: 130px;
    flex-shrink: 0;
    word-break: break-all;
  }
`
const ChatForm = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;

  div:first-child {
    flex-grow: 1;
  }
`

export const S = {
  ChatForm,
  ChatMessages,
}
