import { styled, keyframes } from 'styled-components';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const ContainerDishes = styled.div`
  width: 100%;
  height: 80vh;
  padding: 10px;
  overflow: auto;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 30%;
`;

export const Title = styled.h1`
  width: 100%;
  height: 60px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 700;
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ButtonEvaluate = styled(Button)`
  background-color: ${props => (props.disabled ? '#cccccc' : '#f58100')};
  color: #ffff;
  width: 100%;
  height: 40px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

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

export const SectionButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Cancel = styled(Link)`
  color: #f58100;
  width: 100%;
  height: 40px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  border: 1px solid #f58100;
  background-color: #ffff;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid #ffff;
    background-color: #f58100;
    color: #ffff;
  }
`;
