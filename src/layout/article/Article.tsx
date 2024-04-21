import React from 'react';
import {S} from './Article_Styles'
import {Posts} from "../posts/Posts";
import {PostsType} from "../../App";
import {Messages} from "../messages/Messages";
import {Profile} from "../profile/Profile";

import {Routes, Route} from 'react-router-dom'

type ArticleProps = {
    posts: Array<PostsType>
    changeAddPostInput: (value:string) => void
    addPostInput: string
    addPost: () => void
}

export const Article = ({posts, changeAddPostInput, addPostInput, addPost}: ArticleProps) => {

    const profilePosts = posts.filter(post => post.userId === 3)

    return (
        <S.Article>
            <Routes>
                <Route path="/posts" element={<Posts posts={posts} />}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/profile" element={<Profile
                    posts={profilePosts}
                    changeAddPostInput={changeAddPostInput}
                    addPostInput={addPostInput}
                    addPost={addPost}
                />}/>
            </Routes>
        </S.Article>
    );
};
