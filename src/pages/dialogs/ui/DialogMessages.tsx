import { Check, CheckCheck, Trash2, Undo2 } from 'lucide-react'

import { type Message } from '@/app/types'
import { Button } from '@/shared/ui'

import { S } from './Dialog.styles.ts'

type Props = {
  messages: Message[]
  currentUserId: number
  handleModal: (message: Message) => void
  handleSpam: (message: string) => void
  handleRestoreMessage: (messageId: string) => void
}

export const DialogMessages = ({
  currentUserId,
  handleModal,
  handleRestoreMessage,
  handleSpam,
  messages,
}: Props) => {
  return (
    <S.DialogMessages>
      {messages.map(message => (
        <li
          className={
            message.senderId === currentUserId ? 'sender' : 'recipient'
          }
          key={message.id}
        >
          {message.senderId === currentUserId ? (
            <Button variant="icon">
              {message?.removed ? (
                <Undo2
                  onClick={() => handleRestoreMessage(message.id)}
                  color="darkorange"
                  strokeWidth={1}
                  size={24}
                />
              ) : (
                <Trash2
                  onClick={() => handleModal(message)}
                  color="darkorange"
                  strokeWidth={1}
                  size={24}
                />
              )}
            </Button>
          ) : (
            <Button onClick={() => handleSpam(message.id)} variant="icon">
              spam
            </Button>
          )}
          {message?.removed ? (
            <p>This message has been deleted</p>
          ) : (
            <>
              <p>{message.body}</p>
              <S.DialogMessageInfo>
                <span>
                  {new Date(message.addedAt).toLocaleDateString() +
                    ' ' +
                    new Date(message.addedAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                </span>
                <span>
                  {message.senderId === currentUserId ? (
                    message.viewed ? (
                      <CheckCheck size={18} />
                    ) : (
                      <Check size={18} />
                    )
                  ) : null}
                </span>
              </S.DialogMessageInfo>
            </>
          )}
        </li>
      ))}
    </S.DialogMessages>
  )
}
