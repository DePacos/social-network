import React from "react"
import { S } from "./profile.styles"
import { AppRootState, UserProfile } from "@/app/types/types"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProfile } from "@/entities/reducers/profileReducer"
import { SkeletonStyled } from "@/app/styles/global.styles"

class Profile extends React.Component<Props> {

  componentDidMount() {
    const { params, fetchProfile } = this.props
    fetchProfile(+params.id)
  }

  render() {
    const { profile, isLoading } = this.props

    return (
      <S.Profile>
        <h1>Profile</h1>
        {isLoading ? (
          <SkeletonStyled />
        ) : (
          <>
            <div>User ID: {profile.userId}</div>
            <div>User name: {profile.fullName}</div>
            <div>Photos: {profile.photos.small}</div>
            <div>Job: {profile.lookingForAJob}</div>
            <div>Job Description: {profile.lookingForAJobDescription}</div>
            <div>JContacts: {profile.contacts.vk}</div>
          </>
        )}
      </S.Profile>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  profile: state.profile,
  isLoading: state.app.isLoading,
})

function WithParamsComponent(props: Omit<Props, "params">) {
  const params = useParams<{ id: string | undefined }>()
  return <Profile {...props} params={{ id: params.id ? params.id : "1" }} />
}

type Props = {
  profile: UserProfile
  fetchProfile: (userId: number) => void
  params: { id: string }
  isLoading: boolean
}

export default connect(mapStateToProps, { fetchProfile })(WithParamsComponent)
