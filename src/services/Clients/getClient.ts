import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getClient = async() => {
  const response = await apiChef.get<Props.PropsClient>(backendRoutesApi.clients.client);
  return response.data
};