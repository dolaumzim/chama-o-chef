import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const getCategories = (page: number = 1, per_page: number = 25, name?:string) => {
  return apiChef.get<Props.Categories>(backendRoutesApi.categories,
    {params: {page, per_page, name}});
};
