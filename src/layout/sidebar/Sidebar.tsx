import React from 'react';
import {Link} from "react-router-dom";
import {S} from './Sidebar_Styles'

export const Sidebar = () => {
    return (
        <S.Sidebar>
        <nav>
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/messages">Message</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/#">Setting</Link></li>
            </ul>
        </nav>
        </S.Sidebar>
    );
};
