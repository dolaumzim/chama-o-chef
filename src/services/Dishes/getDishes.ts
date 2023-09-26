import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export type Paginated<T> = {
  data: T[];
  currentPage: number;
  totalPages: number;
  total: number;
};

export const getDishes = async (
  pageParam: number,
  perPage: number,
  title = ''
) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    params: {
      page: pageParam,
      per_page: perPage,
      term: title
    }
  };
  return await apiChef
    .get(`${backendRoutesApi.dishes}`, config)
    .then(res => res.data)
    .catch(error => Promise.reject(error));
};
