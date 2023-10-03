import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getOrderItems = (order_id: string) => {
  return apiChef.get<Props.Item[]>(
    backendRoutesApi.clients.orderItems(order_id)
  );
};
