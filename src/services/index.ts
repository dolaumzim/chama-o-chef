export const backendRoutesApi = {
  //Auth
  login: '/sessions/login',
  signup: '/registrations/signup',
  logout: '/sessions/logout',
  forgotPassword: '/passwords/token',
  resetPassword: '/passwords/reset',
  refreshToken: '/sessions/refresh',

  //Addresses
  zipCode: (zipCode: string = ':zipCode') =>
    `/addresses/search_zip_code/${zipCode}`,

  //Clients
  clients: '/clients/me',
  clientUpdate: '/clients/update',

  //Dishes
  dishes: '/dishes',
  dish: (dish_id: string = ':dish_id') => `/dishes/${dish_id}`
};
