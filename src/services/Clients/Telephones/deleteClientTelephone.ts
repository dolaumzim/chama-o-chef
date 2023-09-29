import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';

export const deleteClientTelephone = (telephone_id : string) => {
  return apiChef.delete(backendRoutesApi.clients.telephone(telephone_id));
};
