import React from 'react';
import {AppRootState, PostType} from "../../types/types";
import {connect} from "react-redux";
import {S} from './Posts_Styles'

type PostsProps = {
    posts: PostType[]
}

class Posts extends React.Component<PostsProps> {
    render() {
        const {posts} = this.props

        return (
            <S.Posts>
                <h1>Posts</h1>
                {posts ?
                    posts.map(post => {
                    return (
                        <li key={post.id}>
                            <h2><a href="/#">{post.title}</a></h2>
                            <p>{post.body}</p>
                            <img src={post.img} alt="post-img"/>
                        </li>
                    )
                }): 'no posts'}
            </S.Posts>
        )
    }
}

const mapStateToProps = (state: AppRootState) => ({
    posts: state.posts
});

export default connect(mapStateToProps)(Posts)