import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postCreateOrder = (
    order : Props.OrderProps
) => {
  return apiChef.post<Props.OrderResponse>(backendRoutesApi.clients.orders, {
    order: order
  });
};