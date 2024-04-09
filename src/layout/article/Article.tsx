import React from 'react';
import {S} from './Article_Styles'
import {Posts} from "../posts/Posts";
import {PostsType} from "../../App";
import {Messages} from "../messages/Messages";
import {Profile} from "../profile/Profile";

import {Routes, Route} from 'react-router-dom'

type ArticleProps = {
    posts: Array<PostsType>
}

export const Article = ({posts}: ArticleProps) => {
    return (
        <S.Article>
            <Routes>
                <Route path="/posts" element={<Posts posts={posts} />}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </S.Article>
    );
};
