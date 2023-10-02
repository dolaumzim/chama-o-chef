import { keyframes, styled } from 'styled-components';
import { Button } from '../Button';

type CartContainerProps = {
  isActive: boolean;
};

export const CartContainer = styled.section<CartContainerProps>`
  width: 100%;
  max-width: 330px;
  background-color: white;
  height: 93vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0px 20px 20px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(${props => (props.isActive ? '0%, 0%' : '110%, 0')});
  transition: all 400ms ease;
  z-index: 1;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.2);

  .field-address {
    border-radius: 5px;
    width: 100%;
    height: 30px;
    margin: 10px;
  }
  option {
    font-size: 15px;
  }
`;

export const CartItems = styled.div`
  flex-grow: 1;
  overflow: auto;

  CartItem:last-child {
    border-bottom: none;
  }
`;

export const CartResume = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  border-top: 1px solid #ddd;
  padding: 35px 0 15px;
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ButtonCartOrder = styled(Button)`
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
