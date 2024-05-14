import React from 'react';

import {S} from './Messages_Styles'
import {NavLink, Outlet} from "react-router-dom";
import {UsersType} from "../../App";

type MessagesProps = {
    users: Array<UsersType>
}


export const Messages = ({users}: MessagesProps) => {
    return (
        <S.Messages>
            <h1>Messages</h1>
            <S.MessagesWrap>
                <S.Contacts>
                    <ul>
                        {users.map(user => <li key={user.id}>
                            <NavLink to={user.massagesId}><img
                                src={user.avatar}
                                alt="avatar"/>{user.name}
                            </NavLink></li>)}
                    </ul>
                </S.Contacts>
                <Outlet/>
            </S.MessagesWrap>
        </S.Messages>
    );
};