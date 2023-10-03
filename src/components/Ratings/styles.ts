import { styled } from 'styled-components';

export const ContainerRating = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  gap: 20px;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
`;

export const Title = styled.h2`
  display: flex;
  font-size: 15px;
  height: 20px;
  gap: 20px;
`;
export const Rate = styled.div`
  height: 20px;
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
`;
export const Comment = styled.div`
  height: 20px;
`;

export const HasLiked = styled.div`
  width: fit-content;
  margin-top: auto;
  display: flex;
  background-color: #ffff;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
