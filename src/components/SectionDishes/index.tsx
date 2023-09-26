import React, { useMemo, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Dish } from '../Dish';
import {
  Button,
  StyledAllDishes,
  StyledListDish,
  StyledSection,
  StyledTitle,
  TitleContainer
} from './styles';
import { getDishes } from '../../services/Dishes/getDishes';
import { InputFind } from '../InputFind';
import { useDebouncedValue } from '../../hooks/debounce';
import * as Props from '../../services/structure';

export const SectionDishes: React.FC = () => {
  const [title, setTitle] = useState('');
  const perPage = 15;
  const debouncedTitle = useDebouncedValue(title, 500);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ['/posts', [debouncedTitle]],
      ({ pageParam = 1 }) => getDishes(pageParam, perPage, debouncedTitle),
      {
        getNextPageParam: lastPage => {
          return lastPage.meta.next_page;
        }
      }
    );
  console.log(data?.pages);

  const items = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page.data];
    }, []);
  }, [data]);

  const handleFetchNextPage = () => {
    fetchNextPage();
  };

  return (
    <StyledSection>
      <StyledTitle>
        <TitleContainer>
          <h1>Pratos</h1>
          <InputFind
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Busca por prato"
          />
        </TitleContainer>
        <StyledAllDishes to={'/pratos'}>Ver todos</StyledAllDishes>
      </StyledTitle>
      <StyledListDish>
        {items?.map((item: Props.DishData, index: number) => (
          <Dish
            key={index}
            image={item.images[0]}
            name={item.name}
            price={item.unit_price}
            restaurantName={item.chef.name}
            rating={
              item.ratings.length > 0 ? item.ratings[0].rate.toString() : '0'
            }
          />
        ))}
        {items?.length === 0 && !isLoading && <p>Nenhum prato encontrado.</p>}
      </StyledListDish>
      {hasNextPage && !title && (
        <Button
          onClick={handleFetchNextPage}
          disabled={isFetchingNextPage}
          loading={isFetchingNextPage}
        >
          {isFetchingNextPage ? '' : 'Ver mais'}
        </Button>
      )}
    </StyledSection>
  );
};
