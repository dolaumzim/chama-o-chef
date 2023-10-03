import styled from 'styled-components';

export const DishContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: #fff;
`;

export const CommentBox = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  resize: none;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  border-radius: 5px;
  background: #fff3e5;
  float: right;
  color: #000;
  font-size: 15px;
  font-style: normal;
  align-items: center;
  gap: 4px;

  img {
    width: 15px;
    height: 15px;
  }
`;

export const RatingSelect = styled.select`
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  border-radius: 5px;
  background: #fff3e5;
  float: right;
  color: #000;
  font-size: 15px;
  font-style: normal;
  align-items: center;
  gap: 4px;

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
  }
`;

export const TitleDish = styled.h1`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  color: #000;
  text-transform: capitalize;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const TitleChef = styled.h2`
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;
