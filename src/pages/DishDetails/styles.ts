import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0px;
`;

export const ImageBanner = styled.div`
  width: 100%;
  height: 7.5vh;
  border: none;
  margin: 0px;
  padding: 0px;
  background-image: url('../src/assets/banner.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerDish = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  background-color: #fff;
  padding: 8px 180px;
  gap: 50px;
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
  margin-bottom: 30px;
  margin-top: 30px;
  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
export const DetailsDish = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;

export const ImgDish = styled.img`
  max-width: 50%;
  max-height: 100%;
  width: auto;
  height: auto;
  border-radius: 20px;
  flex-shrink: 0;
`;

export const DescriptionDish = styled.p`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DishInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Chef = styled.h1`
  color: #000;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleDish = styled.h2`
  color: #000;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  font-size: 40px;
  text-align: right;
  margin-top: auto;
`;

export const Rate = styled.span`
  display: flex;
  justify-content: space-between;
  width: 45px;
  height: 25px;
  margin-top: 20px;
  padding: 0px 5px;
  border-radius: 5px;
  background: #fff3e5;
  float: left;
  color: #000;
  font-size: 15px;
  font-style: normal;
  align-items: center;
  gap: 4px;
  font-weight: 600;

  img {
    width: 15px;
    height: 15px;
  }
`;

export const ToAdd = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 20px;
`;

export const Button = styled.button`
  width: 253px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f58100;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #dedede;
  background: #fff;
  width: 159px;
  height: 50px;
  flex-shrink: 0;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 3px;
`;

export const ButtonPlus = styled.button`
  width: 50px;
  height: 45px;
  color: ${props => props.color || '#f58100'};
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #ffff;
  text-align: center;
`;

export const Like = styled(FcLike)`
  width: 40px;
  height: 40px;
`;

export const Dislike = styled(FcLikePlaceholder)`
  width: 40px;
  height: 40px;
`;
