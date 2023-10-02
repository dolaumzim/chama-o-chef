import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  border: none;
  background-color: #fff;
  padding: 8px 160px;
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
  overflow: visible;
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

export const NoMoreDishes = styled.div`
  width: 100%;
  border: 1px solid #f5f0eb;
  background: #fff;
  color: #f58100;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 100px;
  font-weight: 600;
`;

export const ImageBanner = styled.div`
  width: 100%;
  height: 70px;
  border: none;
  margin: 0px;
  padding: 0px;
  background-image: url('../src/assets/banner.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Back = styled(Link)`
  display: flex;
  width: 90px;
  color: #f58100;
  align-items: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  margin-bottom: 50px;
  margin-top: 30px;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    text-align: left;
  }
`;
