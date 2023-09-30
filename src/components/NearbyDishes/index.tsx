import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DishData } from '../../services/structure';
import Carousel, { CarouselProps } from '../Carousel';
import { getDishes } from '../../services/Dishes/getDishes';

const getUserLocation = () => {
  return {
    latitude: -25.457317961714313,
    longitude: -49.294663627927406
  };
};

const NearbyDishes = () => {
  const [dishes, setDishes] = useState<DishData[]>([]);

  const getNearby = async (latitude : number, longitude : number) => {
    try {
    const nearbyResponse = await getDishes({latitude : latitude, longitude : longitude})
    setDishes(nearbyResponse.data)
  } catch (error) {
    console.error('Erro ao buscar dados da API')
  }}

  useEffect(() => {
    const userLocation = getUserLocation();

    getNearby(userLocation.latitude, userLocation.longitude)
  }, []);

  const carouselData: CarouselProps = {
    items: dishes.map(item => ({
      id: item.id,
      image: item.images[0],
      name: item.name,
      price: item.unit_price,
      restaurantName: item.chef.name,
      rating: item.ratings.length > 0 ? item.ratings[0].rate.toString() : '0'
    }))
  };

  return (
    <div>
      <h2>Pratos Próximos</h2>
      <Carousel {...carouselData}/>
    </div>
  );
};

export default NearbyDishes;
