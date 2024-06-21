import React from 'react';
import {S} from './Messages_Styles'
import {Button} from "../../components/button/Button";
import {useParams} from "react-router-dom";
import {AppRootState, MessagesType} from "../../types/types";
import {connect} from "react-redux";



type RouteParams = {
    id?: string
}

type WithRouterProps<T> = T & { params?: RouteParams };

type MessagesProps = {
    messages: MessagesType
    params?: RouteParams
}

class Messages extends React.Component<MessagesProps> {
    render() {
        const {messages, params} = this.props
        return (
            <>
                {params && params.id ?
                    <>
                        <S.MessagesView>
                            {messages[params.id].map(message =>
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
                            <Button title={'Send'} onclick={() => {
                            }}/>
                        </S.MessagesSend>
                    </>
                    :
                    'no users'}
            </>
        )
    }
}

const withRouter = <P extends object>(WrappedComponent: React.ComponentType<WithRouterProps<P>>) => {
    const ComponentWithRouter = (props: P) => {
        const params = useParams<RouteParams>();
        return <WrappedComponent {...props as P} params={params} />;
    }
    return ComponentWithRouter;
}

const mapStateToProps = (state: AppRootState) => ({
    messages: state.messages
});

export default connect(mapStateToProps)(withRouter(Messages));
