import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const patchCheckoutOrder = (
    orderId : string
) => {
  return apiChef.patch<Props.CheckoutProps>(backendRoutesApi.clients.checkoutOrder(orderId));
};