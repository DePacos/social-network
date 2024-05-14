import React from 'react';
import {S} from './Article_Styles'
import {Posts} from "../posts/Posts";
import {MessagesType, PostsType, UsersType} from "../../App";
import {Messages} from "../messages/Messages";
import {Profile} from "../profile/Profile";

import {Routes, Route} from 'react-router-dom'
import {MessagesView} from "../messages/MessagesView";


type ArticleProps = {
    posts: Array<PostsType>
    users: Array<UsersType>
    messages: MessagesType
    changeAddPostInput: (value:string) => void
    addPostInput: string
    addPost: () => void
}

export const Article = ({posts, users, messages, changeAddPostInput, addPostInput, addPost}: ArticleProps) => {

    const profilePosts = posts.filter(post => post.userId === 3)

    return (
        <S.Article>
            <Routes>
                <Route path="/" element={<h1>Main</h1>}/>
                <Route path="/posts" element={<Posts posts={posts} />}/>
                <Route path="/messages" element={<Messages users={users}  />}>
                    <Route path=':id' element={<MessagesView messages={messages}/>}/>
                </Route>
                <Route path="/profile" element={<Profile
                    posts={profilePosts}
                    changeAddPostInput={changeAddPostInput}
                    addPostInput={addPostInput}
                    addPost={addPost}
                />}/>
                <Route path="/setting" element={<h1>Setting</h1>}/>
            </Routes>
        </S.Article>
    );
};
