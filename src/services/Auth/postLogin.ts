import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postLoginRequest = (values: Props.PropsLogin) => {
  return apiChef.post<Props.PropsLogin>(backendRoutesApi.login, {
    session: {
      email: values.user.email,
      password: values.user.password
    }
  });
};
