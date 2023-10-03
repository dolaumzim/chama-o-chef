import styled, {keyframes} from "styled-components";
import {Form} from 'formik'
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

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

    const rotate = keyframes`
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    `;

export const SubmitButton = styled(Button)`
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

    &:after {
    content: '';
    display: ${props => (props.loading ? 'inline-block' : 'none')};
    width: 20px;
    height: 20px;
    border: 2px solid white;
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${rotate} 1s linear infinite;
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
    color : red;
    font-size: 15px;
    font-weight: 400;
`

export const SuccessMessage = styled.div`
    color: green;
    font-size: 15px;
    margin-bottom: 10px;
`