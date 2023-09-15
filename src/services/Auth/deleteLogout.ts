import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postLoginRequest = () => {
  return apiChef.delete<Props.PropsLogin>(backendRoutesApi.logout);
};
