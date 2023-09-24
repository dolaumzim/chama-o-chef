import React, { useEffect, useState } from 'react';
import { Dish } from '../Dish';
import {
  StyledAllDishes,
  StyledListDish,
  StyledSection,
  StyledTitle
} from './styles';
import * as Props from '../../services/structure';
import { getDishes } from '../../services/Dishes/getDishes';

export const SectionDishes: React.FC = () => {
  const [dishes, setDishes] = useState<Props.DishData[]>([]);
  const totalItems = 10;

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await getDishes();
        setDishes(response.data.data.slice(0, totalItems));
      } catch (error) {
        console.error('Erro ao buscar os pratos:', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <StyledSection>
      <StyledTitle>
        <h1>Pratos</h1>
        <StyledAllDishes to={'/pratos'}>Ver todos...</StyledAllDishes>
      </StyledTitle>
      <StyledListDish>
        {dishes.map(dish => (
          <Dish
            key={dish.id}
            image={dish.images[0]}
            name={dish.name}
            price={dish.unit_price}
            restaurantName={dish.chef.name}
            rating={
              dish.ratings.length > 0 ? dish.ratings[0].rate.toString() : '0'
            }
          />
        ))}
      </StyledListDish>
    </StyledSection>
  );
};
