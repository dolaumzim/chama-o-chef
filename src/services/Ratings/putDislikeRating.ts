import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export const putDislikeRating = (dish_id : string, rating_id : string) => {
  return apiChef.put(backendRoutesApi.dislikeRating(dish_id, rating_id));
};