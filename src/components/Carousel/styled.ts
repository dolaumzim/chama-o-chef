import styled from 'styled-components';

export const CarouselButtonContainer = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 0;
  transition: background-color 0.3s;
`;

export const CarouselButtonLeftArrow = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  transition: background-color 0.3s;
  position: absolute;
  left: -50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const CarouselButtonRightArrow = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  transition: background-color 0.3s;
  position: absolute;
  right: -76vw;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const CarouselButtonIcon = styled.i`
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
