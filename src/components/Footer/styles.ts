import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 400px;
  margin-top:50px;
  padding: 0px 150px;
`;

export const Content = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: flex-start; 
  width: 100%;
  margin-bottom: 20px;
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const LogoImage = styled.img`
  width: 300px;
  height: auto;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const FooterText = styled.p`
  margin: 5px 0;
  color: #717171;
  max-width: 600px;
`;

export const Bottom = styled.div`
margin: 20px;
`

export const CopyrightText = styled.p`

color: #717171;
`
