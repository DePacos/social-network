import React from 'react';
import {S} from './Messages_Styles'
import {Button} from "../../components/button/Button";
import {useParams} from "react-router-dom";
import {MessagesType} from "../../App";


type MessagesViewProps = {
    messages: MessagesType
}

export const MessagesView = ({messages}: MessagesViewProps) => {
    const id = useParams()
    return (
        <>
            <S.MessagesView>
                    {messages[String(id.id)].map(message =>
                <S.MessagesCurrentUser>
                        <span>{message.userMassage} | {message.date}</span>
                </S.MessagesCurrentUser>
                    )}
                <S.MessagesContact className="messages_contact-user">
                    A, autem ipsum iure ratione rem sit.
                </S.MessagesContact>
            </S.MessagesView>
            <S.MessagesSend>
                <textarea/>
                <Button title={'Send'} callback={() => {
                }}/>
            </S.MessagesSend>
        </>
    );
};
