import { backendRoutesApi } from '..';
import { apiChef } from '../api';

export const getDishes = async (
  page: number = 1,
  per_page: number = 15,
  term?: string
) => {
  try {
    const response = await apiChef.get(backendRoutesApi.dishes, {
    params: {
      page,
      per_page,
      term
    }
  })
  console.log(response.data)
  return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Erro de requisição');
  }
}
