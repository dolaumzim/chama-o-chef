import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';


export const getAddressRequest = async(cep : string) => {
  const response = await apiChef.get<Props.AddressProps>(backendRoutesApi.zipCode(cep));
  return response.data
};