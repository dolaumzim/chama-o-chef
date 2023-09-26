import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getCities = (state_id: string, page: number = 1, per_page: number = 25, name?:string) => {
  return apiChef.get<Props.Cities>(backendRoutesApi.cities(state_id),
    {params: {page, per_page, name}});
};