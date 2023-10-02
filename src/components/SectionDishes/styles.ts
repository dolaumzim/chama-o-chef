import { Link } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
import { Button } from '../Button';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:center;

  width: 100%;
  border: none;
  background-color: #fff;
  padding: 8px 160px;

  @media screen and (max-width: 980px) {
    padding:8px 50px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 30px;
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const StyledListDish = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 30px;
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
  position: static;
  float: right;
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ButtonLoad = styled(Button)`
  width: 100%;
  border: 1px solid #f5f0eb;
  background: #fff;
  color: #f58100;
  cursor: pointer;
  text-decoration: none;
  padding: 0 20px;
  border-radius: 4px;
  margin: 3px 0;
  height: 50px;
  font-weight: 600;
  transition: 0.1s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-size: 100%;
  line-height: 1.15;
  text-transform: none;
  -webkit-tap-highlight-color: #f58100;

  &:hover {
    background-color: #f58100;
    color: #fff;
  }

  &:after {
    content: '';
    display: ${props => (props.loading ? 'inline-block' : 'none')};
    width: 20px;
    height: 20px;
    border: 2px solid white;
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${rotate} 1s linear infinite;
  }
`;


