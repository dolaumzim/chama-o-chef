import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getCity = (state_id: string, city_id : string) => {
  return apiChef.get<Props.City>(backendRoutesApi.city(state_id, city_id));
};