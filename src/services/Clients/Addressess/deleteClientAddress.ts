import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';

export const deleteClientAddress = (
    address_id : string,
) => {
  return apiChef.delete(backendRoutesApi.clients.address(address_id));
};