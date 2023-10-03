import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getRatings = (dish_id : string) => {
  return apiChef.get<Props.Rating[]>(backendRoutesApi.ratings(dish_id));
};