import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getDishes = () => {
  return apiChef.get<Props.DishesApiResponse>(backendRoutesApi.dishes);
};
