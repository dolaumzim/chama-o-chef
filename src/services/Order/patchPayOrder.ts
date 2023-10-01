import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export const patchPayOrder = (
    orderId : string
) => {
  return apiChef.patch(backendRoutesApi.clients.payOrder(orderId));
};