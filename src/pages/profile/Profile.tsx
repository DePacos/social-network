import React, { ChangeEvent } from "react"
import { S } from "./Profile_Styles"
import { Button } from "../../shared/ui/Button/Button"
import { AppRootState } from "../../app/types/types"
import { connect } from "react-redux"

type ProfileProps = {
  // posts: PostType[]
  // addPostAC?: (postText: string) => AddPostActionType
}

type ProfileState = {
  // inputValue: string
}

class Profile extends React.Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props)

    this.state = {
      inputValue: "",
    }
  }

  changeAriaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ inputValue: e.currentTarget.value })
  }

  addPostHandler = () => {
    // if (this.props.addPostAC) {
    //   this.props.addPostAC(this.state.inputValue)
    // }
  }

  render() {
    return (
      <S.Profile>
        <h1>Profile</h1>
        {/*<S.Post>*/}
        {/*  {this.props.posts.map((post) => (*/}
        {/*    <li key={post.id}>*/}
        {/*      <h2>*/}
        {/*        <a href="/public#">{post.title}</a>*/}
        {/*      </h2>*/}
        {/*      <p>{post.body}</p>*/}
        {/*      <img src={post.img} alt="post-img" />*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</S.Post>*/}
        {/*<S.WrapAddPost>*/}
        {/*  <textarea*/}
        {/*    value={this.state.inputValue}*/}
        {/*    onChange={(e) => this.changeAriaHandler(e)}*/}
        {/*  />*/}
        {/*  <Button title="Add Post" onclick={this.addPostHandler} />*/}
        {/*</S.WrapAddPost>*/}
      </S.Profile>
    )
  }
}

// const mapStateToProps = (state: AppRootState) => ({
//   posts: state.posts.filter((post) => post.userId === 1),
// })

// const mapDispatchToProps = {
//   addPostAC,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Profile)
export default connect()(Profile)
