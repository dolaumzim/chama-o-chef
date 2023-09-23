import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid rgba(143, 143, 143, 0.29); 
    background: #f7f7f7; 
    color: #323232;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;  
    height:6vh;
    width:80%;
    padding: 5px 10px;

    &::placeholder{
        color: #959595;
        font-family: Montserrat;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal; 
    }

    &[type=number] {
        appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

