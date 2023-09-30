import styled from "styled-components";
import { Form } from 'formik'
import { Link } from "react-router-dom";

export const FormType = styled(Form)`
display:flex; 
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
gap: 20px;
`

export const PageTitle = styled.h1`
    color: #323232;
    font-size: 40px;
    text-align: center;
`

export const PageSubtitle = styled.h2`
  color: #7B7A7A;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`


export const SubmitButton = styled.button`
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
font-variant: all-small-caps;
border-radius: 50px;
background: #F58100; 
margin: 20px;
width: 50%;
padding: 12px 56px;
cursor: pointer;
transition: ease-out 300ms;

    &:hover{
        background-color: #de7702;
        transition: ease-out 300ms;
    }

    &:disabled{
        cursor: default;
        background-color: #868686;
    }
    `


export const NewUser = styled.span`
color: #323232;
`


export const NewUserLink = styled(Link)`
color: #F58100;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
`


export const PasswordForgot = styled(Link)`
color: #7B7A7A;
font-size: 15px;
font-weight: 600;
text-decoration-line: underline;
width: 60%;
text-align: center;
`


export const ErrorSpan = styled.span`
color: red;
font-size: 15px;
font-weight: 400;
`
