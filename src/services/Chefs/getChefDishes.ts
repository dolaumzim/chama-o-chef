import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export interface GetChefDishesOptions {
  page?: number;
  per_page?: number;
  name?: string;
  description?: string;
  available?: boolean;
  active?: boolean;
}

export const getChefDishes = async (
  chef_id: string,
  options: GetChefDishesOptions = {}
) => {
  try {
    const {
      page = 1,
      per_page = 15,
      name,
      description,
      available,
      active
    } = options;

    const response = await apiChef.get(backendRoutesApi.chefs.dishes(chef_id), {
      params: {
        page,
        per_page,
        name,
        description,
        available,
        active
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Erro de requisição');
  }
};
