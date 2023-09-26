import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export const putLikeRating = (dish_id : string, rating_id : string) => {
  return apiChef.put(backendRoutesApi.likeRating(dish_id, rating_id));
};