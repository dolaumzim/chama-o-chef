import { useEffect, useState } from 'react';
import { CarouselProps, DishData } from '../../services/structure';
import Carousel from '../Carousel';
import { getDishes } from '../../services/Dishes/getDishes';

const FavoriteDishes = () => {
  const [favoriteDishes, setFavoriteDishes] = useState<DishData[]>([]);

  const getFavorites = async () => {
    try {
      const favoritesResponse = await getDishes({ favorites: true });
      setFavoriteDishes(favoritesResponse.data);
    } catch (error) {
      console.error('Erro ao buscar dados da API');
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const carouselData: CarouselProps = {
    items: favoriteDishes.map(item => ({
      id: item.id,
      image: item.images[0],
      name: item.name,
      price: item.unit_price,
      restaurantName: item.chef.name,
      rating: item.ratings.length > 0 ? item.ratings[0].rate.toString() : '0',
      isFavorite: true
    }))
  };

  return (
    <div>
      <h2>Pratos Favoritos</h2>
      {favoriteDishes.length === 0 ? (
        <p>Ainda sem pratos favoritos.</p>
      ) : (
        <Carousel {...carouselData} />
      )}
    </div>
  );
};

export default FavoriteDishes;
