import { CircleUserRound, MailPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { DialogsResponse, User } from '@/app/types'

import { timeAgo } from '@/app/utils'

import { S } from './Dialogs.styles.ts'

type Props = {
  isMobile?: boolean
  dialogs: DialogsResponse[]
  id: string
  handleLink: (user: User) => void
}

export const DialogList = ({ dialogs, handleLink, id }: Props) => {
  return (
    <S.WrapContactList>
      {dialogs.length > 0
        ? dialogs.map(dialog => (
            <Link
              onClick={() =>
                handleLink({
                  followed: false,
                  id: dialog.id,
                  name: dialog.userName,
                  photos: dialog.photos,
                  status: '',
                  uniqueUrlName: '',
                })
              }
              to={`/dialogs/${dialog.id}`}
              key={dialog.id}
            >
              <S.ContactList
                className={dialog.id === Number(id) ? 'active' : ''}
              >
                <li>
                  {dialog.photos.small ? (
                    <img src={dialog.photos.small} alt="user-photo" />
                  ) : (
                    <CircleUserRound size={70} strokeWidth={1} />
                  )}
                </li>
                <li>{dialog.userName}</li>
                {dialog.hasNewMessages ? (
                  <S.NewMessages>
                    {dialog.newMessagesCount}
                    <MailPlus size={18} color="mediumspringgreen" />
                  </S.NewMessages>
                ) : null}
                <S.LastActivity>
                  <span>
                    {`${timeAgo(new Date(dialog.lastDialogActivityDate))}`}
                  </span>
                </S.LastActivity>
              </S.ContactList>
            </Link>
          ))
        : 'no dialogs'}
    </S.WrapContactList>
  )
}
