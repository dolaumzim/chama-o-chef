import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const getClientAddress = (address_id : string) => {
  return apiChef.get<Props.ClientAddress>(backendRoutesApi.clients.address(address_id));
};
