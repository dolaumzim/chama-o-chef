import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getDish = (dish_id : string) => {
  return apiChef.get<Props.DishData>(backendRoutesApi.dish(dish_id));
};