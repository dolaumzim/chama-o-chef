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
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
`;
import { Link } from 'react-router-dom';
import { frontEndRoutes } from '../../routes';
import { formatCurrency } from '../../utils/formatCurrency';

interface PropsDish {
  id: string;
  image: string;
  name: string;
  price: string;
  restaurantName: string;
  rating: number;
  isFavorite: boolean;
}

export const Dish = (data: PropsDish) => {
  const maxLength = 18;
  const trimmedRestaurantName =
    data.restaurantName.length > maxLength
      ? data.restaurantName.substring(0, maxLength - 3) + '...'
      : data.restaurantName;

  const trimmedName =
    data.name.length > maxLength
      ? data.name.substring(0, maxLength - 3) + '...'
      : data.name;

  return (      
        <Link to={frontEndRoutes.dish(data.id)}>
          <DishContainer>
            <ImgDish>
              <img src={data.image} alt={data.name} />
            </ImgDish>
            {data.isFavorite ? (
              <FavoriteButton>
                <img src={heartRedIcon} alt="" />
              </FavoriteButton>
            ) : (
              <FavoriteButton>
                <img src={heartBlueIcon} alt="" />
              </FavoriteButton>
            )}
            <DishInfo>
              <StyledTitle>{trimmedName}</StyledTitle>
              <StyledParagraph>{trimmedRestaurantName}</StyledParagraph>
              <StyledSecondParagraph>
                {formatCurrency(Number(data.price), 'BRL')}
                <span>
                  <img src={star} /> {data.rating}
                </span>
              </StyledSecondParagraph>
            </DishInfo>
          </DishContainer>
        </Link>
  );
};
