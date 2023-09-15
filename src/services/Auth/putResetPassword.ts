import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postLoginRequest = (values: Props.PropsLogin) => {
  return apiChef.put<Props.PropsLogin>(backendRoutesApi.resetPassword, {
    reset_password_token: values.access_token,
    password: values.user.password,
    password_confirmation: values.user.passwordConfirmation
  });
};
