import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
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
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  margin-top: 25px;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  background-color: #f58100;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
`;
