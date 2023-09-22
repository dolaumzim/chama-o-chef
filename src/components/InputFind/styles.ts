import { styled } from 'styled-components';

export const FindInput = styled.div`
  display: flex;
  width: 230px;
  padding: 10px 15px;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f7f8f9;
  color: #969595;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  input {
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    outline: 0;
    padding-left: 5px;
  }

  placeholder {
    color: #333;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.3;
  }
`;
