import { PiShoppingCartDuotone } from 'react-icons/pi';
import { styled } from 'styled-components';

export const Button = styled.button`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
`;

export const Cart = styled(PiShoppingCartDuotone)`
  width: 30px;
  height: 30px;
  color: gray;
`;

export const CounterCart = styled.span`
  background-color: red;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
