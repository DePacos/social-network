import React from 'react';
import {NavLink} from "react-router-dom";
import {S} from './Sidebar_Styles'

export const Sidebar = () => {
    return (
        <S.Sidebar>
        <nav>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
                <li><NavLink to="/messages">Message</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/#">Setting</NavLink></li>
            </ul>
        </nav>
        </S.Sidebar>
    );
};
