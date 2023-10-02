import React, { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { Dish } from '../../components/Dish';
import * as Styled from './styles';
import { getDishes } from '../../services/Dishes/getDishes';
import { InputFind } from '../../components/InputFind';
import { useDebouncedValue } from '../../hooks/debounce';
import * as Props from '../../services/structure';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../../components/Header';
import { Cart } from '../../components/Cart';
import arrowLeft from '../../assets/arrow-left.svg';

export const AllDishes: React.FC = () => {
  const [title, setTitle] = useState('');
  const perPage = 35;
  const debouncedTitle = useDebouncedValue(title, 500);
  const queryClient = useQueryClient();
  const [activeColor, setActiveColor] = useState(false);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['/dishes', [debouncedTitle]],
    ({ pageParam = 1 }) =>
      getDishes(
        !debouncedTitle
          ? { page: pageParam, per_page: perPage, term: debouncedTitle }
          : { page: pageParam, per_page: 50, term: debouncedTitle }
      ),
    {
      getNextPageParam: lastPage => {
        return lastPage.meta.next_page;
      }
    }
  );

  const items = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page.data];
    }, []);
  }, [data]);

  const handleFetchNextPage = () => {
    fetchNextPage();
    console.log(hasNextPage);
  };

  useEffect(() => {
    console.log(hasNextPage);
  }, []);

  useEffect(() => {
    return () => {
      queryClient.removeQueries('/dishes');
    };
  }, [queryClient]);

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

  const averageRate = (ratings: Props.Rating[]) => {
    const totalAux = ratings.reduce(
     (sum, rating) => sum + rating.rate, 0);
   return Number((totalAux / ratings.length).toFixed(1) )
  }


  return (
    <>
      <Header action={activeColor} />
      <Styled.ImageBanner />
      <Styled.StyledSection>
        <Styled.Back to="/home" title="Voltar">
          <img src={arrowLeft} alt="Seta para a esquerda" /> Voltar
        </Styled.Back>
        <Styled.StyledTitle>
          <Styled.TitleContainer>
            <h1>Pratos</h1>
            <InputFind
              id="searchBar"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Busca por prato"
            />
          </Styled.TitleContainer>
        </Styled.StyledTitle>
        <InfiniteScroll
          dataLength={items ? items.length : 0}
          next={handleFetchNextPage}
          hasMore={!!hasNextPage}
          loader={null}
          endMessage={
            !hasNextPage && (
              <Styled.NoMoreDishes>Não há mais itens.</Styled.NoMoreDishes>
            )
          }
        >
          <Styled.StyledListDish>
            {items?.map((item: Props.DishData, index: number) => (
              <Dish
                key={index}
                id={item.id}
                image={item.images[0]}
                name={item.name}
                price={item.unit_price}
                restaurantName={item.chef.name}
                rating={
                  item.ratings.length > 0 ? averageRate(item.ratings) : 0
                }
                isFavorite={item.liked_by_me}
              />
            ))}
            {items?.length === 0 && !isLoading && (
              <p>Nenhum prato encontrado.</p>
            )}
          </Styled.StyledListDish>
        </InfiniteScroll>
      </Styled.StyledSection>
      <Cart />
    </>
  );
};
