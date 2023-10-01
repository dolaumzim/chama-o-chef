import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postEvaluateOrder = (
  orderId: string,
  ratings: Props.RatingsProps[]
) => {
  return apiChef.post(backendRoutesApi.clients.evaluateOrder(orderId), {
    order: { ratings }
  });
};
