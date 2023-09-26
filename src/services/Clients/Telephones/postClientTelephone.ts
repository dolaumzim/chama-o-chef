import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const postClientTelephone = (number : number) => {
  return apiChef.post<Props.ClientTelephone>(backendRoutesApi.clients.telephones, {
    number
  });
};
