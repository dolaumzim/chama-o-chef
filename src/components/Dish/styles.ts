import { styled } from 'styled-components';

export const DishContainer = styled.div`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  margin-top: 50px;
  border-radius: 5px 5px 10px 10px;
  background: #aeaebe35;
  position: relative;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const ImgDish = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 3px 5px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const DishInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 180px;
  height: 110px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 5px 5px 10px 10px;
  background: #fff;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  color: #000;
  text-transform: capitalize;
`;

export const StyledParagraph = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

export const StyledSecondParagraph = styled.p`
  display: flex;
  justify-content: space-between;
  color: #f58100;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  span {
    display: flex;
    justify-content: space-between;
    padding: 0px 5px;
    border-radius: 5px;
    background: #fff3e5;
    float: right;
    color: #000;
    font-size: 10px;
    font-style: normal;
    align-items: center;
    gap: 4px;

    img {
      width: 8px;
      height: 8px;
    }
  }
`;
