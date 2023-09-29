import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dish } from '../Dish';

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

const CustomCarouselButtons = ({ onClick, direction }: CustomArrowProps) => (
  <button className={`customCarouselButton-${direction}`} onClick={onClick}>
    {direction === 'next' ? 'Próximo' : 'Anterior'}
  </button>
);

const Carousel = ({ items }: CarouselProps) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomCarouselButtons direction="next" />,
    prevArrow: <CustomCarouselButtons direction="prev" />
  };

  return (
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
  );
};

export default Carousel;
