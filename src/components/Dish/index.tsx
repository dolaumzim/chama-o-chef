import {
  DishContainer,
  DishInfo,
  ImgDish,
  StyledParagraph,
  StyledSecondParagraph,
  StyledTitle
} from './styles';
import star from '../../assets/Star.svg';

interface PropsDish {
  image: string;
  name: string;
  price: string;
  restaurantName: string;
  rating: string;
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
          R$
          {data.price}
          <span>
            <img src={star} /> {data.rating}
          </span>
        </StyledSecondParagraph>
      </DishInfo>
    </DishContainer>
  );
};
