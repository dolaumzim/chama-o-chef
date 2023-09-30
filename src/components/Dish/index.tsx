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
  background-color: transparent;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
`;

interface PropsDish {
  image: string;
  name: string;
  price: string;
  restaurantName: string;
  rating: string;
  isFavorite?: boolean;
}

export const Dish = (data: PropsDish) => {

  return (
    <DishContainer>
      <ImgDish>
        <img src={data.image} alt={data.name} />
      </ImgDish>
      <DishInfo>
        <StyledTitle>{data.name}</StyledTitle>
        <StyledParagraph>{data.restaurantName}</StyledParagraph>
        <StyledSecondParagraph>
          R$ {data.price}
          <FavoriteButton isFavorite={data.isFavorite}>
            <img
              src={data.isFavorite ? heartRedIcon : heartBlueIcon}
              alt="HeartIcon"
            />
          </FavoriteButton>
          <span>
            <img src={star} alt="StarIcon" /> {data.rating}
          </span>
        </StyledSecondParagraph>
      </DishInfo>
    </DishContainer>
  );
};
