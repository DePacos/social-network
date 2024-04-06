import React from 'react';
import {S} from './Article_Styles'
import {Posts} from "../posts/Posts";
import {PostsType} from "../../App";

type ArticleProps = {
    posts: Array<PostsType>
}

export const Article = ({posts}:ArticleProps) => {
    return (
        <S.Article>
            <h1>Title</h1>
            <Posts posts={posts}/>
        </S.Article>
    );
};
