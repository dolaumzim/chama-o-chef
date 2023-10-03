import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselProps, DishData, Rating } from '../../services/structure';
import Carousel from '../Carousel';
import { getDishes } from '../../services/Dishes/getDishes';
import { useCart } from '../../contexts/CartContext';
import { Inner, Outer, StyledTitle, TitleContainer } from './styles';

const NearbyDishes = () => {
  const [dishes, setDishes] = useState<DishData[]>([]);
  const {userData,loading} = useCart()
  
  const getUserLocation = () => {
    if(loading){
    return{
  latitude: 0,
  longitude: 0}}
  else{
    return {
      latitude: userData.addresses[0].latitude,
      longitude: userData.addresses[0].longitude,
    };
  };}

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
  }, [loading]);


  const averageRate = (ratings: Rating[]) => {
    const totalAux = ratings.reduce(
     (sum, rating) => sum + rating.rate, 0);
   return Number((totalAux / ratings.length).toFixed(1) )
  }

  const carouselData: CarouselProps = {
    items: dishes.map((item) => ({
      id: item.id,
      image: item.images[0],
      name: item.name,
      price: item.unit_price,
      restaurantName: item.chef.name,
      rating: item.ratings.length > 0 ? averageRate(item.ratings) : 0,
      isFavorite : item.liked_by_me
    }))
  };

  return (
    <div>
      <StyledTitle>
        <TitleContainer>
          <h1>Pratos Próximos</h1>
        </TitleContainer>
      </StyledTitle>
      
        <Outer>
          <Inner>
            <Carousel {...carouselData}/>
          </Inner>
        </Outer>
      
    </div>
  );
};

export default NearbyDishes;
