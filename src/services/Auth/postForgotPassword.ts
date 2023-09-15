import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postLoginRequest = (values: Props.PropsLogin) => {
  return apiChef.post<Props.PropsLogin>(backendRoutesApi.forgotPassword, {
    email: values.user.email
  });
};
