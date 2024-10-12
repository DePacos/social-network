import React from "react"
import { S } from "./Profile_Styles"
import { AppRootState, UserProfile } from "../../app/types/types"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchProfile } from "../../entities/users/profileReducer"
import { SkeletonStyled } from "../../app/styles/GlobalStyles"

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

const mapDispatchToProps = {
  fetchProfile: fetchProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(WithParamsComponent)

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
