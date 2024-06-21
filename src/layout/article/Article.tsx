import React from 'react';
import {S} from './Article_Styles'
import Posts from "../posts/Posts";
import Dialogs from "../dialogs/Dialogs";
import Profile from "../profile/Profile";
import Messages from "../messages/Messages";
import {Routes, Route} from 'react-router-dom'



export const Article = () => {
    return (
        <S.Article>
            <Routes>
                <Route path="/" element={<h1>Main</h1>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/messages" element={<Dialogs/>}>
                    <Route path=':id' element={<Messages/>}/>
                </Route>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/setting" element={<h1>Setting</h1>}/>
            </Routes>
        </S.Article>
    );
};
