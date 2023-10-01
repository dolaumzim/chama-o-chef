import {
  DishContainer,
  DishInfo,
  ImgDish,
  StyledParagraph,
  StyledSecondParagraph,
  StyledTitle
} from './styles';
import star from '../../assets/star.svg';
import { Button } from '../Button';
import styled from 'styled-components';
import heartRedIcon from '../../assets/heartRedIcon.svg';
import heartBlueIcon from '../../assets/heartBlueIcon.svg';

interface ButtonProps {
  isFavorite?: boolean;
}

const FavoriteButton = styled(Button)<ButtonProps>`
  position:absolute;
  top:10px;
  right:10px;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
`;
import { Link } from 'react-router-dom';
import { frontEndRoutes } from '../../routes';

interface PropsDish {
  id: string;
  image: string;
  name: string;
  price: string;
  restaurantName: string;
  rating: string;
  isFavorite: boolean;
}


export const Dish = (data: PropsDish) => {
  return (
    <>
    {location.pathname.includes('home') || location.pathname.includes('alldishes') ? 
    <Link to={frontEndRoutes.dish(data.id)}>
      <DishContainer>
        <ImgDish>
          <img src={data.image} alt={data.name} />
        </ImgDish>
        {data.isFavorite ? <FavoriteButton><img src={heartRedIcon} alt="" /></FavoriteButton>:
        <FavoriteButton><img src={heartBlueIcon} alt="" /></FavoriteButton>}
        <DishInfo>
          <StyledTitle>{data.name}</StyledTitle>
          <StyledParagraph>{data.restaurantName}</StyledParagraph>
          <StyledSecondParagraph>
            {Number(data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            <span>
              <img src={star} /> {data.rating}
            </span>
          </StyledSecondParagraph>
        </DishInfo>
      </DishContainer>
    </Link> :
    <Link to={frontEndRoutes.dish(data.id)} reloadDocument>
    <DishContainer>
      <ImgDish>
        <img src={data.image} alt={data.name} />
      </ImgDish>
      {data.isFavorite ? <FavoriteButton><img src={heartRedIcon} alt="" /></FavoriteButton>:
      <FavoriteButton><img src={heartBlueIcon} alt="" /></FavoriteButton>}
      <DishInfo>
        <StyledTitle>{data.name}</StyledTitle>
        <StyledParagraph>{data.restaurantName}</StyledParagraph>
        <StyledSecondParagraph>
          {Number(data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          <span>
            <img src={star} /> {data.rating}
          </span>
        </StyledSecondParagraph>
      </DishInfo>
    </DishContainer>
  </Link>
    }
    </>
  );
};
