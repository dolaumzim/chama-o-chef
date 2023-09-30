import styled from "styled-components";
import { Form } from 'formik'

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color : rgba(222, 119, 2, 0.3);
`

export const Logo = styled.img`
    position: absolute;
    top: 13vh;
    right:13vw;

`

export const Section = styled.section`
    margin: 10vh;
    padding: 10vh;
    display: flex; 
    background-color:#fff;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 80vw;
    border: 0.5px rgba(50, 50, 50, 0.2) solid;
    box-shadow: 3vh 2vw rgba(222, 119, 2, 0.8); 
    border-radius: 80px;
`

export const FormType = styled(Form)`
    display: flex; 
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 80%;
    gap: 20px;
    overflow-y:auto;
    height:90%;
    font-size: 15px;
    font-weight: 400;

    input{
        width: 50%;
        height: 4vh;
        text-align:center;
    }
`

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 20px;
    width: 70%;
`

export const NumberComplement = styled.div`
    display: flex;
    width: 60%;
    gap: 1vw;
    box-sizing:border-box;

    input{
        width:100%
    }
`

export const SectionTelephones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 70%;
`

export const SubInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`

export const SubInfos = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    gap: 20px;
    padding-bottom: 20px;
`

export const FormTypeAddresses = styled(Form)`
    display: flex; 
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 70%;
    gap: 20px;
    overflow-y:auto;
    height:90%;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 2vh;

    input{
        height: 4vh;
    }
`

export const SubInfosAddresses = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5vw;
    padding-bottom: 20px;
`

export const NumberContainer = styled.div`
    width: 25%;
`
    
export const ComplementContainer = styled.div`
    width: 75%;
`

export const CityState = styled.div`
    display: flex;
    height: 6vh;
    width: 60%;
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
    margin-bottom: 3vh;
`

export const PageSubtitle = styled.h2`
    color: #323232;
    font-size: 25px;
    margin-bottom: 2vh;
`

export const FormTypeNameAndEmail = styled(Form)`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2vh;
    height:100%;
    font-size: 15px;
    font-weight: 400;

    input{
        width: 100%;
        height: 4vh;
    }
    
`

export const NewNameAndEmail = styled.div`
    display : flex;
    justify-content: center;
    width : 100%;
    gap: 2vw;
`

export const NameAndEmail = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1vh;
    font-weight: 600;
`


export const Paragraph = styled.span`
    color: #323232;
    font-size:20px;
    font-weight: 600;
`

export const Paragraphs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
`


export const SpanLeft = styled.span`
    color: #323232;
    
`

export const SpanRight = styled.span`
    color: #323232;
    width: 150px;
    text-align: right;
`

export const SignUpSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NewButton = styled.button`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-variant: all-small-caps;
    border-radius: 25px;
    background: #F58100; 
    padding: 6px 28px;
    transition: ease-out 300ms;
    cursor: pointer;

    &:hover{
        background-color: #de7702;
        transition: ease-out 300ms;
    }
`

export const NewButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 70%;
`

export const AddCancel = styled.div`
    display: flex;
    justify-content: center;
    gap: 2vw;
    width:60%;
`

export const Add = styled.button`
    align-self: center;
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-variant: all-small-caps;
    border-radius: 25px;
    background: #F58100; 
    padding: 3px 14px;
    transition: ease-out 300ms;
    cursor: pointer;

    &:hover{
        background-color: #de7702;
        transition: ease-out 300ms;
    }
`

export const Delete = styled.button`
    align-self: center;
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-variant: all-small-caps;
    border-radius: 25px;
    background: #141417; 
    padding: 3px 14px;
    margin: 5px;
    transition: ease-out 300ms;
    cursor: pointer;

    &:hover{
        background-color: #27272e;
        transition: ease-out 300ms;
    }
`

export const DeleteContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
`


export const Line = styled.div`
    border-bottom : 2px solid orange;
    width: 30vw;
    margin: 3vh 0;
`

