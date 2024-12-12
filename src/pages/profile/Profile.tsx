import React from "react"
import { S } from "./profile.styles"
import { AppRootState, User, UserProfile } from "@/app/types/types"
import { connect } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { fetchProfile, fetchProfileStatus} from "@/entities/reducers/profileReducer"
import { SkeletonStyled } from "@/app/styles/global.styles"
import { Button } from "@/shared/ui/Button/Button"
import userCap from "@/shared/assets/images/user-cap.webp"
import { fetchFollow, removeFollow, setFollow } from "@/entities/reducers/followReducer"
import { Toast } from "@/shared/ui/Toast/Toast"

class Profile extends React.Component<Props> {

  state = {
    error: null
  }

  componentDidMount() {
    const { params, fetchProfile, fetchFollow, currentUserId, fetchProfileStatus} = this.props
    fetchProfile(+params.id)
    fetchProfileStatus(+params.id)

    if (currentUserId !== params.id) {
      fetchFollow(+params.id)
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { params, fetchProfile } = this.props
    if (prevProps.params.id !== this.props.params.id) {
      fetchProfile(+params.id);
    }
  }

  handleFollow = () => {
    const { setFollow, isFollowing, removeFollow, params } = this.props
    if (isFollowing) {
      removeFollow(+params.id)
    }else {
      setFollow(+params.id)
    }
  }

  render() {
    const { profile, isLoading, currentUserId, isFollowing } = this.props
    const { error } = this.state

    const contactLinks = [
      { name: "VK", url: profile.contacts?.vk },
      { name: "Facebook", url: profile.contacts?.facebook },
      { name: "Instagram", url: profile.contacts?.instagram },
      { name: "Youtube", url: profile.contacts?.youtube },
      { name: "X", url: profile.contacts?.twitter },
      { name: "Github", url: profile.contacts?.github },
      { name: "Website", url: profile.contacts?.website },
      { name: "MainLink", url: profile.contacts?.mainLink }
    ];

    return (
      <S.Profile>
        <h1>Profile</h1>
        {isLoading ? (
          <SkeletonStyled />
        ) : (
          <>
            <S.ProfileHeader>
              <div>
                <img src={profile.photos?.small ? profile.photos.small : userCap} alt="profile-img" />
                <div>ID: {profile.userId}</div>
                <div>Name: {profile.fullName}</div>
                <div>Status: {profile.status}</div>
                <div>Job Looking: {profile.lookingForAJob ? 'Looking for a job' : "I'm working"}</div>
              </div>
              <div>
                <div>Job
                  Description: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "-"}</div>
                <div>About Me: {profile.aboutMe ? profile.aboutMe : "-"}</div>
              </div>
              {profile.userId === +currentUserId
                ? <Button variant={"primary"}><Link to={`/editprofile/${currentUserId}`}>profile setting</Link></Button>
                : <Button variant={"primary"} onClick={this.handleFollow}>{isFollowing ? 'unfollow' : 'follow'}</Button>
              }
            </S.ProfileHeader>
            <S.ProfileContact>
              <h2>Contacts</h2>
              <div>
                {contactLinks.map(contact => (
                  contact.url && (<a href={contact.url} key={contact.name}>{contact.name}</a>)
                ))}
              </div>
            </S.ProfileContact>
            <div>
              {profile.photos?.large
                ? <img src={profile.photos.large} alt="profile-img" />
                : "no-profile-image"
              }
            </div>
          </>
        )}
        {error && <Toast notifications={error} />}
      </S.Profile>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  profile: state.profile,
  isLoading: state.app.isLoading,
  currentUserId: state.auth.currentUserId,
  isFollowing: state.follow.isFollow,
})

function WithParamsComponent(props: Omit<Props, "params">) {
  const params = useParams<{ id: string | undefined }>()
  return <Profile {...props} params={{ id: params.id ? params.id : "1" }} />
}

type Props = {
  profile: UserProfile
  fetchProfile: (userId: number) => void
  fetchProfileStatus: (userId: number) => void
  fetchFollow: (userId: number) => Promise<void>
  setFollow: (userId: number) => Promise<void>
  removeFollow: (userId: number) => Promise<void>
  isFollowing: boolean
  params: { id: string }
  isLoading: boolean
  currentUserId: string
}

export default connect(mapStateToProps, {
  fetchProfile,
  fetchProfileStatus,
  fetchFollow,
  setFollow,
  removeFollow
})(WithParamsComponent)
