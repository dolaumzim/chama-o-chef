import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { getDish } from '../../services/Dishes/getDish';
import { useCallback, useEffect, useMemo, useState } from 'react';
import * as Props from '../../services/structure';
import { apiChef } from '../../services/api';
import Map from '../../components/Map';
import * as Styled from './styles';
import arrowLeft from '../../assets/arrow-left.svg';
import star from '../../assets/star.svg';
import { Ratings } from '../../components/Ratings';
import { putLikeDish } from '../../services/Dishes/putLikeDish';
import { getChefDishes } from '../../services/Chefs/getChefDishes';
import Carousel from '../../components/Carousel';

interface Location {
  label: string;
  lat: number;
  lng: number;
}
export const DishDetails = () => {
  const { id } = useParams<string>();
  const [dishData, setDishData] = useState<Props.DishData>();
  const [cordChef, setCordChef] = useState<Location[]>([]);
  const [cordClient, setCordClient] = useState<Location>();
  const [activeColor, setActiveColor] = useState(false);
  const [counter, setCounter] = useState(0);
  const counterValue = useMemo(() => counter, [counter]);
  const [liked, setLiked] = useState<boolean | undefined>();
  const [chefDishes, setChefDishes] = useState([]);

  // const [carouselItems, setCarouselItems] = useState([]);

  const fetchDishData = useCallback(async () => {
    if (!id || dishData) {
      return;
    }
    const dish = await getDish(id);
    const dataDish = { ...dish.data };
    setDishData(dataDish);
  }, [id, dishData]);

  const fetchChefData = useCallback(async () => {
    if (!dishData?.chef_id || cordChef.length > 0) {
      return;
    }
    const getChef = await apiChef.get<Props.Chef>(`chefs/${dishData?.chef_id}`);
    if (getChef.data) {
      const chef = getChef.data;
      const cords: Location[] = [
        {
          lat: chef.address.latitude,
          lng: chef.address.longitude,
          label: chef.name
        }
      ];
      const getDishesChef = await getChefDishes(chef.id);
      setCordChef(cords);

      const carouselItems = getDishesChef.data.map((dish: Props.DishData) => ({
        id: dish.id,
        image: dish.images[0],
        name: dish.name,
        price: dish.unit_price,
        restaurantName: dish.chef.name,
        rating: dish.ratings.length > 0 ? dish.ratings[0].rate.toString() : '0'
      }));
      setChefDishes(carouselItems);
      console.log('CarouselItems ', carouselItems);
    }
  }, [dishData, cordChef]);

  const fetchClientData = useCallback(async () => {
    if (cordClient) {
      return;
    }
    const getClient = await apiChef.get<Props.PropsClient>('clients/me');
    const cords = {
      label: getClient.data.name,
      lat: getClient.data.addresses[0].latitude,
      lng: getClient.data.addresses[0].longitude
    };
    setCordClient(cords);
  }, [cordClient]);

  useEffect(() => {
    fetchDishData();
    fetchChefData();
    fetchClientData();
    handleGetLike();
  }, [fetchDishData, fetchChefData, fetchClientData]);

  useEffect(() => {
    const positionScroll = () => {
      if (window.scrollY > 40) {
        setActiveColor(true);
      } else {
        setActiveColor(false);
      }
    };
    window.addEventListener('scroll', positionScroll);
  }, []);

  const incrementCounter = () => {
    setCounter(counterValue + 1);
  };

  const decrementCounter = () => {
    if (counterValue > 0) setCounter(counterValue - 1);
  };

  let average = 0;
  if (dishData && dishData.ratings && dishData.ratings.length > 0) {
    const total = dishData.ratings.reduce(
      (sum, rating) => sum + rating.rate,
      0
    );
    average = total / dishData.ratings.length;
  } else {
    average = 0;
  }

  const handleGetLike = () => {
    if (dishData?.liked_by_me) {
      return setLiked(dishData.liked_by_me);
    }
  };

  const handleLike = async () => {
    if (dishData?.id) {
      await putLikeDish(dishData.id);
      const response = await getDish(dishData.id);
      setLiked(response.data.liked_by_me);
    }
  };

  return (
    <>
      <Styled.Container>
        <Header action={activeColor} />
        <Styled.ImageBanner />
        <Styled.ContainerDish>
          <Styled.Back to="/home" title="Voltar">
            <img src={arrowLeft} alt="Seta para a esquerda" /> Voltar
          </Styled.Back>
          {dishData && cordClient && (
            <>
              <Styled.DetailsDish>
                <Styled.ImgDish src={`${dishData.images}`} />
                <Styled.DishInfo>
                  <Styled.Chef>{`Chef ${dishData.chef.name}`}</Styled.Chef>
                  <Styled.TitleDish>{dishData.name}</Styled.TitleDish>

                  <Styled.DescriptionDish>{`${dishData.description}`}</Styled.DescriptionDish>
                  <Styled.Rate>
                    <img src={star} />
                    {average}
                  </Styled.Rate>
                  {liked ? (
                    <Styled.Like onClick={handleLike} cursor={'pointer'} />
                  ) : (
                    <Styled.Dislike onClick={handleLike} cursor={'pointer'} />
                  )}

                  <Styled.Price>{`R$ ${dishData.unit_price}`}</Styled.Price>
                  <Styled.ToAdd>
                    <Styled.Counter>
                      <Styled.ButtonPlus
                        color="#C9C9C9"
                        onClick={decrementCounter}
                      >
                        -
                      </Styled.ButtonPlus>
                      {counter}
                      <Styled.ButtonPlus
                        color="#f58100"
                        onClick={incrementCounter}
                      >
                        +
                      </Styled.ButtonPlus>
                    </Styled.Counter>
                    <Styled.Button>Adicionar ao carrinho</Styled.Button>
                  </Styled.ToAdd>
                </Styled.DishInfo>
              </Styled.DetailsDish>
              <Map page={'details'} restaurant={cordChef} user={cordClient} />
              <h1>Peça também</h1>
              <Carousel items={chefDishes} />

              <h1>Avaliações</h1>
              {dishData.ratings.length > 0 ? (
                <>
                  {dishData.ratings.map((item, index) => (
                    <Ratings
                      key={index}
                      id={item.id}
                      user_id={item.user_id}
                      dish_id={item.dish_id}
                      rate={item.rate}
                      comment={item.comment}
                      created_at={item.created_at}
                      updated_at={item.updated_at}
                      user_name={item.user_name}
                      total_likes={item.likes}
                      total_dislikes={item.dislikes}
                    />
                  ))}
                </>
              ) : (
                'Ainda sem avaliações.'
              )}
            </>
          )}
        </Styled.ContainerDish>
      </Styled.Container>
    </>
  );
};
