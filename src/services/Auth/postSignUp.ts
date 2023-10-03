import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postSignUpRequest = (values: Props.SignUpLocal) => {
  return apiChef.post<Props.SignUpLocal>(backendRoutesApi.signup, {
    user: {
      ...values
    }
  });
};
