import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    justify-content: center;
    height : 100vh;
    width : 100vw;
    background-color: #ffffff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: Montserrat;
    `

export const LayoutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 150px 0;
    height : 100vh;
    width : 35vw;
    background: linear-gradient(155deg, #F58100 20.09%, #DC7400 73.94%);
    border-radius : 0 0 200px 0; 
`

export const OutletSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height : 100vh;
    width : 55vw;
    margin-left : 10vw;
`

export const LayoutTitle = styled.h1`
    color: #FFF;
    text-align: center;
    width:70%;
`