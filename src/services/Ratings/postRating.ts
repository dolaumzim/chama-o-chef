import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postRating = (dish_id : string, rate : number, comment : string) => {
  return apiChef.post<Partial<Props.Rating>>(backendRoutesApi.ratings(dish_id), {
    rating: {
        rate,
        comment,
    }
  });
};