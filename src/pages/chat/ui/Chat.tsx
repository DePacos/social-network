import { Link } from 'react-router-dom'

import { PageLayout } from '@/app/pageLayout'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Button, FormInput, Toast } from '@/shared/ui'

import { useChat } from '../model/useChat.ts'
import { S } from './Сhat.styles.ts'

const Chat = () => {
  const {
    handleSubmit,
    onSubmit,
    appNotification,
    isValid,
    control,
    messages,
  } = useChat()

  return (
    <PageLayout title="Chat" image={dialogsBg}>
      <S.ChatMessages>
        {messages.map((item, i) => (
          <li key={i}>
            <Link to={`/profile/${item.userId}`}>
              <img src={item.photo} alt="user photo" />
              <span className="name">{item.userName}</span>
              <span className="message">{item.message}</span>
            </Link>
          </li>
        ))}
      </S.ChatMessages>
      <S.ChatForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput maxLength={101} name="message" control={control} />
        <Button disabled={!isValid} variant="primary">
          Send message
        </Button>
      </S.ChatForm>
      {appNotification.value && <Toast notification={appNotification.value} />}
    </PageLayout>
  )
}

export default Chat
