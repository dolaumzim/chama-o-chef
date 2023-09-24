import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  border: none;
  background-color: #fff;
  padding: 8px 100px;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const StyledListDish = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  gap: 20px;
`;

export const StyledAllDishes = styled(Link)`
  border: none;
  text-decoration: none;
  color: #f58100;
  background-color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding-right: 150px;
`;
