import React from 'react';
import {S} from './Messages_Styles'
import {Button} from "../../components/button/Button";
import {withRouter} from "react-router-dom";
import {AppRootState, MessagesType} from "../../types/types";
import {connect} from "react-redux";


type MessagesProps = {
    messages: MessagesType
}

class Messages extends React.Component<MessagesProps> {
    render() {
        const {messages} = this.props
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
                <Button title={'Send'} onclick={() => {}}/>
            </S.MessagesSend>
        </>
    )
    }
}

const mapStateToProps = (state: AppRootState) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(Messages)
