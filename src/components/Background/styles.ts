import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; 

`;

export const RowImages = styled.div`
width: auto;
height: 500px;
flex-shrink: 0;
border-radius: 5px 5px 10px 10px;
transition: transform 0.4s ease-in-out;
cursor: pointer;
&:hover {
  transform: scale(1.02);
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

`;
