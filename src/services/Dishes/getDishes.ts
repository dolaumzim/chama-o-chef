import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export interface GetDishesOptions {
  page?: number;
  per_page?: number;
  term?: string;
  latitude?: number;
  longitude?: number;
  categories?: string;
  favorites?: boolean;
}

export const getDishes = async (options: GetDishesOptions = {}) => {
  try {
    const {
      page = 1,
      per_page = 15,
      term,
      latitude,
      longitude,
      categories,
      favorites
    } = options;

    const response = await apiChef.get(backendRoutesApi.dishes, {
      params: {
        page,
        per_page,
        term,
        latitude,
        longitude,
        categories,
        favorites
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Erro de requisição');
  }
};
