import { backendRoutesApi } from '../..';
import { apiChef } from '../../api';
import * as Props from '../../structure';

export const putClientTelephone = (telephone_id : string, number : number) => {
    return apiChef.put<Props.ClientTelephone>(backendRoutesApi.clients.telephone(telephone_id), {
        number
      });
};
