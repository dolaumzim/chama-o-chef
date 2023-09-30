import { backendRoutesApi } from '..';
// import { UpdateProps } from '../../pages/UserProfile';
import { apiChef } from '../api';
import * as Props from '../structure';

export const putUpdateClient = (values : any) => {
  return apiChef.put<Props.PropsClient>(backendRoutesApi.clients.clientUpdate,{
    client : values
  });
};