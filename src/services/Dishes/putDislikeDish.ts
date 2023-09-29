import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export const putDislikeDish = (dish_id : string) => {
  return apiChef.put(backendRoutesApi.dislike(dish_id));
};