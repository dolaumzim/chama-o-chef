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
  const initialSlidesToScroll = items?.length < 2 ? items?.length : 3;

  const settings: Settings = {
    variableWidth: true,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: initialSlidesToShow,
    slidesToScroll: initialSlidesToScroll,
    nextArrow: <CustomCarouselButtons direction="next" />,
    prevArrow: <CustomCarouselButtons direction="prev" />,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: items?.length < 5 ? items?.length : 5,
          speed: 650,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: items?.length < 4 ? items?.length : 4,
          speed: 650,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: items?.length < 3 ? items?.length : 3,
          speed: 600,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 550,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        }
      },
    ]
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
