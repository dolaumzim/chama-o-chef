import { useEffect, useState } from 'react';
import axios from 'axios';
import { backendRoutesApi } from '../../services';
import { DishData } from '../../services/structure';
import Carousel, { CarouselProps } from '../Carousel';

const FavoriteDishes = () => {
  const [favoriteDishes, setFavoriteDishes] = useState<DishData[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get(
        `http://academy-react.rarolabs.com.br/api/v1${backendRoutesApi.dishes}/?favorites=true`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        if (response.status === 200) {
          setFavoriteDishes(response.data.data);
        } else {
          throw new Error('Erro na solicitação da API');
        }
      })
      .catch(error => {
        console.error(
          'Erro ao buscar dados da API:',
          error.response ? error.response.data : error.message
        );
      });
  }, [token]);

  const handleToggleFavorite = async (dishId: string, isFavorite: boolean) => {
    const action = isFavorite ? 'dislike' : 'like';
    try {
      await axios.post(
        `http://academy-react.rarolabs.com.br/api/v1${backendRoutesApi.dish}/${dishId}/${action}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (isFavorite) {
        setFavoriteDishes(prevFavoriteDishes =>
          prevFavoriteDishes.filter(dish => dish.id !== dishId)
        );
      } else {
        const response = await axios.get(
          `http://academy-react.rarolabs.com.br/api/v1${backendRoutesApi.dishes}/?favorites=true`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        if (response.status === 200) {
          setFavoriteDishes(response.data.data);
        } else {
          throw new Error('Erro na solicitação da API');
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Erro ao favoritar/desfavoritar o prato:',
          error.response ? error.response.data : error.message
        );
      } else {
        console.error(
          'Erro desconhecido ao favoritar/desfavoritar o prato:',
          error
        );
      }
    }
  };

  const carouselData: CarouselProps = {
    items: favoriteDishes.map(item => ({
      id: item.id,
      image: item.images[0],
      name: item.name,
      price: item.unit_price,
      restaurantName: item.chef.name,
      rating: item.ratings.length > 0 ? item.ratings[0].rate.toString() : '0',
      isFavorite: true,
      onToggleFavorite: () => handleToggleFavorite(item.id, true)
    }))
  };

  return (
    <div>
      <h2>Pratos Favoritos</h2>
      <Carousel {...carouselData} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
};

export default FavoriteDishes;
