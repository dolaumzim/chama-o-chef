import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postRefreshToken = (refresh_token : string) => {
  return apiChef.post<Props.PropsLogin>(backendRoutesApi.refreshToken, {
    auth: {
      refresh_token: refresh_token
    }
  });
};