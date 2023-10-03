import styled from "styled-components";

export const FooterContainer = styled.footer`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height: 100px;
    margin-top: 20px;
    background-color: #a7b0aa;
    border-top: 1px solid gray;
    border-radius: 20px 20px 0 0;
    `

export const Title = styled.div`
    font-size:15px;
   
`

export const Links = styled.div`
    font-size:30px;
    border-bottom: 2px solid black;

    :visited{
        text-decoration:none;
        color: black;
    }
`