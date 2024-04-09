import React from 'react';
import {PostsType} from "../../App";
import {S} from './Posts_Styles'

type PostsProps = {
    posts: Array<PostsType>
}
export const Posts = ({posts}: PostsProps) => {
    return (
        <S.Posts>
            <h1>Posts</h1>
            {posts.map(post => {
                return (
                    <li key={post.id}>
                        <h2><a href="/#">{post.title}</a></h2>
                        <p>{post.body}</p>
                        <img src={post.img} alt="post-img"/>
                    </li>
                )
            })}
        </S.Posts>
    );
};