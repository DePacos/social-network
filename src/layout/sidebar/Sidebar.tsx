import React from 'react';
import {S} from './Sidebar_Styles'
export const Sidebar = () => {
    return (
        <S.Sidebar>
        <nav>
            <ul>
                <li><a href="/#">Main</a></li>
                <li><a href="/#">News</a></li>
                <li><a href="/#">Message</a></li>
                <li><a href="/#">Profile</a></li>
                <li><a href="/#">Setting</a></li>
            </ul>
        </nav>
        </S.Sidebar>
    );
};
