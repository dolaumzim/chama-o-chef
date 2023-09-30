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

const CustomCarouselButtons: React.FC<CustomArrowProps> = ({
  onClick,
  direction
}) => (
  <button className={`customCarouselButton-${direction}`} onClick={onClick}>
    {direction === 'next' ? 'Próximo' : 'Anterior'}
  </button>
);

const Carousel = ({ items, onToggleFavorite }: CarouselProps) => {
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
    <Slider {...settings}>
      {items.map((item, index) => (
        <Dish
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          restaurantName={item.restaurantName}
          rating={item.rating}
          onToggleFavorite={() => onToggleFavorite?.(item.id, true)}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
