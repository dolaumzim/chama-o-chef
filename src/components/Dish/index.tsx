import {
  DishContainer,
  DishInfo,
  ImgDish,
  StyledParagraph,
  StyledSecondParagraph
} from './styles';
import star from '../../assets/star.svg';

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
        <h2>{data.name}</h2>
        <StyledParagraph>{data.restaurantName}</StyledParagraph>
        <StyledSecondParagraph>
          {data.price}
          <span>
            <img src={star} /> {data.rating}
          </span>
        </StyledSecondParagraph>
      </DishInfo>
    </DishContainer>
  );
};
