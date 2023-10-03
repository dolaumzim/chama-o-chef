import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const getClientAddresses = (
  page: number = 1,
  per_page: number = 25,
  zip_code?: string,
  name?: string,
  public_place?: string,
  city_name?: string
) => {
  return apiChef.get<Props.ClientAddresses>(backendRoutesApi.clients.addresses, {
    params: {
      page,
      per_page,
      zip_code,
      name,
      public_place,
      city_name
    }
  });
};
