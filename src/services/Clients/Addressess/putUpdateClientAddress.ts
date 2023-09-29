import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const putUpdateClientAddress = (
    address_id : string,
    address : Props.AddressAttributes
) => {
  return apiChef.put<Props.ClientAddress>(backendRoutesApi.clients.address(address_id), {
    address,
  });
};