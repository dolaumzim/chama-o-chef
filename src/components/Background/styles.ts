import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  img.image-slide {
    opacity: 1;
  }
`;
