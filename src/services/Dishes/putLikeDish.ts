import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export const putLikeDish = (dish_id : string) => {
  return apiChef.put(backendRoutesApi.like(dish_id));
};