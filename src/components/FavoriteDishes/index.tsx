import { useEffect, useState } from 'react';
import { CarouselProps, DishData, Rating } from '../../services/structure';
import Carousel from '../Carousel';
import { getDishes } from '../../services/Dishes/getDishes';
import { Inner, Outer, StyledTitle, TitleContainer } from './styles';

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

  const averageRate = (ratings: Rating[]) => {
    const totalAux = ratings.reduce(
     (sum, rating) => sum + rating.rate, 0);
   return Number((totalAux / ratings.length).toFixed(1) )
  }

  const carouselData: CarouselProps = {
    items: favoriteDishes.map(item => ({
      id: item.id,
      image: item.images[0],
      name: item.name,
      price: item.unit_price,
      restaurantName: item.chef.name,
      rating: item.ratings.length > 0 ? averageRate(item.ratings) : 0,
      isFavorite: true
    }))
  };

  return (
    <div>
      <StyledTitle>
        <TitleContainer>
          <h1>Pratos Favoritos</h1>
        </TitleContainer>
      </StyledTitle>
      {favoriteDishes.length === 0 ? (
        <p>Ainda sem pratos favoritos.</p>
      ) : (
        <Outer>
          <Inner>
            <Carousel {...carouselData} />
          </Inner>
        </Outer>
      )}
    </div>
  );
};

export default FavoriteDishes;
