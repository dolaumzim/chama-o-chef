import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dish } from '../Dish';
import {
  CarouselButtonContainer,
  CarouselButtonIcon,
  CarouselButtonLeftArrow,
  CarouselButtonRightArrow,
  // Inner,
  // Outer
} from './styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CarouselProps } from '../../services/structure';

interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  direction: 'next' | 'prev';
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
  const initialSlidesToShow = items?.length < 6 ? items?.length : 6;
  const initialSlidesToScroll = items?.length < 2 ? items?.length : 4;

  const settings: Settings = {
    variableWidth: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: initialSlidesToShow,
    slidesToScroll: initialSlidesToScroll,
    nextArrow: <CustomCarouselButtons direction="next" />,
    prevArrow: <CustomCarouselButtons direction="prev" />
  };

  return (
  
        <Slider {...settings}>
          {items.map((item, index) => (
            <Dish
              id={item.id}
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              restaurantName={item.restaurantName}
              rating={item.rating}
              isFavorite={item.isFavorite}
            />
          ))}
        </Slider>
    
  );
};

export default Carousel;
