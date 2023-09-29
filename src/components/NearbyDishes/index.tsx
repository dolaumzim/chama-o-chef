import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { backendRoutesApi } from '../../services';
import axios from 'axios';
import { DishData } from '../../services/structure';
import Carousel, { CarouselProps } from '../Carousel';

const getUserLocation = () => {
  return {
    latitude: -25.457317961714313,
    longitude: -49.294663627927406
  };
};

const NearbyDishes = () => {
  const [dishes, setDishes] = useState<DishData[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const userLocation = getUserLocation();

    axios
      .get(
        `http://academy-react.rarolabs.com.br/api/v1${backendRoutesApi.dishes}`,
        {
          params: {
            latitude: userLocation.latitude,
            longitude: userLocation.longitude
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          setDishes(response.data.data);
        } else {
          throw new Error('Erro na solicitação da API');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, [token]);

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
      <Carousel {...carouselData} />
    </div>
  );
};

export default NearbyDishes;
