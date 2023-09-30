import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dish } from '../Dish';
import {
  CarouselButtonContainer,
  CarouselButtonIcon,
  CarouselButtonLeftArrow,
  CarouselButtonRightArrow,
  Inner,
  Outer
} from './styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  direction: 'next' | 'prev';
}

export interface CarouselProps {
  items: {
    id: string;
    image: string;
    name: string;
    price: string;
    restaurantName: string;
    rating: string;
  }[];
  onToggleFavorite?: (dishId: string, isFavorite: boolean) => void;
}



const CustomCarouselButtons: React.FC<CustomArrowProps> = ({
  onClick,
  direction
}) => (
  <CarouselButtonContainer onClick={onClick}>
    {direction === 'next' ? (
      <CarouselButtonRightArrow>
        <CarouselButtonIcon>
          <FaChevronRight />
        </CarouselButtonIcon>
      </CarouselButtonRightArrow>
    ) : (
      <CarouselButtonLeftArrow>
        <CarouselButtonIcon>
          <FaChevronLeft />
        </CarouselButtonIcon>
      </CarouselButtonLeftArrow>
    )}
  </CarouselButtonContainer>
);

const Carousel = ({ items }: CarouselProps) => {
  const initialSlidesToShow = items?.length < 3 ? items?.length : 3;
  const initialSlidesToScroll = items?.length < 3 ? items?.length : 3;

  const settings: Settings = {
   
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: initialSlidesToShow,
    slidesToScroll: initialSlidesToScroll,
    nextArrow: <CustomCarouselButtons direction="next" />,
    prevArrow: <CustomCarouselButtons direction="prev" />
  };

  return (
    <Outer>
      <Inner>
        <Slider {...settings}>
          {items.map((item, index) => (
            <Dish
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              restaurantName={item.restaurantName}
              rating={item.rating}
            />
          ))}
        </Slider>
      </Inner>
    </Outer>
  );
};

export default Carousel;
