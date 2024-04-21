import React, {ChangeEvent} from 'react';
import {S} from './Profile_Styles'
import {Button} from "../../components/button/Button";
import {PostsType} from "../../App";

type ProfileProps = {
    posts: Array<PostsType>
    changeAddPostInput: (value: string) => void
    addPostInput: string
    addPost: () => void
}

export const Profile = ({posts, changeAddPostInput, addPostInput, addPost}:ProfileProps) => {

    const buttonHandler = () => {
        addPost()
    }
    const textAriaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeAddPostInput(e.currentTarget.value)
    }

    const renderPost = posts.map(post =>
            <li key={post.id}>
                <h2><a href="/#">{post.title}</a></h2>
                <p>{post.body}</p>
                <img src={post.img} alt="post-img"/>
            </li>
    )

    return (
        <S.Profile>
            <h1>Profile</h1>
            <S.Post>{renderPost}</S.Post>
            <S.WrapAddPost>
            <textarea value={addPostInput} onChange={(e) => textAriaHandler(e)}/>
                <Button title="Add Post" callback={buttonHandler}/>
            </S.WrapAddPost>

        </S.Profile>
    );
};