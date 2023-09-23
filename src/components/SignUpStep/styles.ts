import styled from "styled-components";
import {Form} from 'formik'
import { Link } from "react-router-dom";

export const FormType = styled(Form)`
    display:flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 20px;

`

export const NumberComplement = styled.div`
    display:flex;
    width: 80%;
    gap: 1vw;
    box-sizing:border-box;

    input{
        width:100%
    }
    `

export const NumberContainer = styled.div`
    width: 20%;
    `
    
export const ComplementContainer = styled.div`
    width: 80%;
    `

export const CityState = styled.div`
    display:flex;
    width: 80%;
    gap:1vw;

    input{
        width:100%
    }
`

export const CityContainer = styled.div`
    width: 80%;
`

export const StateContainer = styled.div`
    width: 20%;

    input{
        text-align:center;
    }
`

export const PageTitle = styled.h1`
    color: #323232;
    font-size: 40px;
`

export const SignUpSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
`

export const AlreadySignedUp = styled.span`
    color: #323232;
`

export const AlreadySignedUpLink = styled(Link)`
    color: #F58100;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
`

export const StepButton = styled.button`
    border-radius: 20px;
    border: 1px solid rgba(143, 143, 143, 0.29);
    background: #F7F7F7; 
    color: #959595;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: normal; 
`

export const StepGo = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 90%;
    gap: 20px;
    color: #959595;
    font-size: 15px;
    font-weight: 300;
    `

export const StepBack = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 90%;
    gap: 20px;
    color: #959595;
    font-size: 15px;
    font-weight: 300;
`