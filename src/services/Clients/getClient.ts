import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getClient = () => {
  return apiChef.get<Props.PropsClient>(backendRoutesApi.clients.client);
};