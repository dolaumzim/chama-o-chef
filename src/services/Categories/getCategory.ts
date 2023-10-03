import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getCategory = (category_id : string) => {
  return apiChef.get<Props.Category>(backendRoutesApi.category(category_id));
};