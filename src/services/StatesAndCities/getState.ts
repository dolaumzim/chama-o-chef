import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getState = (state_id : string) => {
  return apiChef.get<Props.StateData>(backendRoutesApi.state(state_id));
};