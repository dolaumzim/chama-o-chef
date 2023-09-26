import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const putUpdateRating = (dish_id : string, rating_id : string, rate : number, comment : string) => {
  return apiChef.put<Partial<Props.Rating>>(backendRoutesApi.rating(dish_id, rating_id ), {
    rating: {
        rate,
        comment,
    }
  });
};