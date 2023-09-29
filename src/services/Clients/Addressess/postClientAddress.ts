import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const postClientAddress = (
    address : Props.AddressAttributes
) => {
  return apiChef.post<Props.ClientAddress>(backendRoutesApi.clients.addresses, {
    address,
  });
};