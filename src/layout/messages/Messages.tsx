import React from 'react';

import {S} from './Messages_Styles.ts'
import {NavLink} from "react-router-dom";
import avatar from '../../assets/images/avatar-dead-monster.svg'
import {Button} from "../../components/button/Button";


export const Messages = () => {
    return (
        <S.Messages>
            <h1>Messages</h1>
            <S.MessagesWrap>
                <S.Contacts>
                    <ul>
                        <li><NavLink to={'#'}><img src={avatar} alt="avatar"/>Bob</NavLink></li>
                        <li><NavLink to={'#'}><img src={avatar} alt="avatar"/>Max</NavLink></li>
                        <li><NavLink to={'#'}><img src={avatar} alt="avatar"/>Alex</NavLink></li>
                        <li><NavLink to={'#'}><img src={avatar} alt="avatar"/>Dan</NavLink></li>
                        <li><NavLink to={'#'}><img src={avatar} alt="avatar"/>David</NavLink></li>
                        <li><NavLink to={'#'}><img src={avatar} alt="avatar"/>Val</NavLink></li>
                    </ul>
                </S.Contacts>
                <S.MessagesView>
                    <S.MessagesCurrentUser>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </S.MessagesCurrentUser>
                    <S.MessagesContact className="messages_contact-user">
                        A, autem ipsum iure ratione rem sit.
                    </S.MessagesContact>
                </S.MessagesView>
                <S.MessagesSend>
                    <textarea/>
                    <Button title={'Send'} callback={() => {}}/>
                </S.MessagesSend>
            </S.MessagesWrap>
        </S.Messages>
    );
};