import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dish } from '../Dish';
import './styles.css'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { IconContext } from 'react-icons';

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
    {direction === 'next' ? <BsArrowRightCircle/> : <BsArrowLeftCircle/>}
  </button>
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
    <IconContext.Provider value={{ color: "#F58100", className: "global-class-name", size: '50px' }}>
  

    <div style={{display:'flex', justifyContent:'center', marginLeft:'10vw'}}>
      <div style={{width: '80%'}}>
        <Slider {...settings} >
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
        
      </div>
      
    </div>
    </IconContext.Provider>
  );
};

export default Carousel;
