import styled from "styled-components"

const ProfileForm = styled.form`
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    column-gap: 25px;
    label {
        display: block;
        margin-bottom: 5px;
    }
    input, textarea{
        width: 100%;
        padding: 7px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    textarea{
        height: 115px;
    }
    button{
        grid-column-start: 3;
    }
    @media(max-width: 991px){
        display: block;
    }
`

const CheckboxWrap = styled.div`
    display: flex;
    gap: 10px;
    white-space: nowrap;
    & > *{
        margin-bottom: 0!important;
    }
    & > :last-child{
        width: 20px;
    }
`

export const S = {
  ProfileForm,
  CheckboxWrap
}