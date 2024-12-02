import React, { Component, FormEvent, FormEventHandler } from "react"
import { S } from "./editProfile.styles"
import { Button } from "@/shared/ui/Button/Button"
import { AppRootState, UserProfile, UserStatus } from "@/app/types/types"
import { connect } from "react-redux"
import {
  fetchEditProfile,
  fetchProfile, fetchProfileStatus,
  fetchSetProfilePhoto,
  fetchSetProfileStatus
} from "@/entities/reducers/profileReducer"
import { useParams } from "react-router-dom"

class EditProfile extends Component<Props, {checked: boolean | undefined}> {

  state = {
    checked: this.props.profile.lookingForAJob
  }

  componentDidMount() {
    const { params, profile, fetchProfile } = this.props
    if (profile.userId !== +params.id) {
      fetchProfile(+params.id)
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.profile.lookingForAJob !== this.props.profile.lookingForAJob) {
      this.setState({ checked: this.props.profile.lookingForAJob })
    }
  }

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ checked: e.currentTarget.checked })
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const photoInput = form.elements.namedItem('photo') as HTMLInputElement

    if (photoInput.files?.length) {
      const fileData = new FormData()
      fileData.append("photo", photoInput.files[0])
      this.props.fetchSetProfilePhoto(fileData)
    }

    if (data.get("status") !== this.props.profile.status) {
     const status = data.get("status") as string
     this.props.fetchSetProfileStatus({ status } )
    }

    this.props.fetchEditProfile({
      userId: +this.props.currentUserId,
      fullName: data.get("name") as string,
      lookingForAJob: this.state.checked,
      lookingForAJobDescription: data.get("jobDesc") as string,
      aboutMe: data.get("aboutMe") as string,
      contacts: {
        github: data.get("github") as string,
        vk: data.get("vk") as string,
        facebook: data.get("facebook") as string,
        instagram: data.get("instagram") as string,
        twitter: data.get("X") as string,
        youtube: data.get("youtube") as string,
        website: data.get("website") as string,
        mainLink: data.get("mainLink") as string
      }
    })
  }

  render() {
    const {profile, isLoading} = this.props
    console.log('edit profile', profile)
    return (
      <>
        <h1>Edit Profile</h1>
        <S.ProfileForm onSubmit={this.handleSubmit}>
          <div>
            <img src={profile.photos?.small} alt="Profile-foto" />
            <input name={"photo"} accept="image/png, image/jpeg" type={"file"} />
            <div>
              <label htmlFor={"name"}>You name*</label>
              <input name={"name"} defaultValue={profile.fullName} />
            </div>
            <div>
              <label htmlFor="status">You status</label>
              <input name={"status"} defaultValue={profile.status} />
            </div>
            <S.CheckboxWrap>
              <label htmlFor={"jobLooking"}>Looking Job</label>
              <input type={"checkbox"} name={"jobLooking"}
                     checked={this.state.checked}
                     onChange={this.handleCheckboxChange}/>
            </S.CheckboxWrap>
          </div>
          <div>
            <div>
              <label htmlFor={"jobDesc"}>Job Description*</label>
              <input name={"jobDesc"} defaultValue={profile.lookingForAJobDescription} />
            </div>
            <div>
              <label htmlFor="aboutMe">About Me*</label>
              <textarea name={"aboutMe"} defaultValue={profile.aboutMe} />
            </div>
          </div>
            <div>
              <div>
                <label htmlFor="github">Github</label>
                <input name={"github"} defaultValue={profile.contacts?.github} />
              </div>
              <div>
                <label htmlFor="vk">VK</label>
                <input name={"vk"} defaultValue={profile.contacts?.vk} />
              </div>
              <div>
                <label htmlFor="facebook">Facebook</label>
                <input name={"facebook"} defaultValue={profile.contacts?.facebook} />
              </div>
              <div>
                <label htmlFor="instagram">Instagram</label>
                <input name={"instagram"} defaultValue={profile.contacts?.instagram} />
              </div>
              <div>
                <label htmlFor="X">X</label>
                <input name={"X"} defaultValue={profile.contacts?.twitter} />
              </div>
              <div>
                <label htmlFor="youtube">Youtube</label>
                <input name={"youtube"} defaultValue={profile.contacts?.youtube} />
              </div>
              <div>
                 <label htmlFor="website">Website</label>
                <input name={"website"} defaultValue={profile.contacts?.website} />
              </div>
              <div>
                <label htmlFor="mainLink">MainLink</label>
                <input name={"mainLink"} defaultValue={profile.contacts?.mainLink} />
              </div>
            </div>
            <Button variant={"primary"} type={"submit"}>{isLoading ? 'Saving...' : 'Submit'}</Button>
        </S.ProfileForm>
      </>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  currentUserId: state.auth.currentUserId,
  profile: state.profile,
  isLoading: state.app.isLoading
})

function WithParamsComponent(props: Omit<Props, "params">) {
  const params = useParams<{ id: string | undefined }>()
  return <EditProfile {...props} params={{ id: params.id ? params.id : "1" }} />
}

type Props = {
  fetchProfile: (userId: number) => void
  fetchEditProfile: (profileData: UserProfile) => void
  fetchSetProfilePhoto: (profilePhoto: FormData) => void
  fetchSetProfileStatus: (status: UserStatus) => void
  fetchProfileStatus: (userId: number) => void
  currentUserId: string
  profile: UserProfile & UserStatus
  params: { id: string }
  isLoading: boolean
}

export default connect(mapStateToProps, { fetchEditProfile, fetchSetProfilePhoto, fetchSetProfileStatus, fetchProfile, fetchProfileStatus })(WithParamsComponent)