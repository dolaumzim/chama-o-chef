import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const getClientTelephones = (
  page: number = 1,
  per_page: number = 25,
  number?: number
) => {
  return apiChef.get<Props.ClientTelephone[]>(backendRoutesApi.clients.telephones, {
    params: {
      page,
      per_page,
      number
    }
  });
};
