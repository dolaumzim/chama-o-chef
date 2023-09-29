import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const getClientTelephone = (telephone_id : string) => {
  return apiChef.get<Props.ClientTelephone>(backendRoutesApi.clients.telephone(telephone_id));
};
