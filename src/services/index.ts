export const backendRoutesApi = {
  //Categories
  categories: '/categories',
  category: (category_id: string = ':category_id') =>
    `/categories/${category_id}`,

  //States
  states: '/states',
  state: (state_id: string = ':state_id') => `/states/${state_id}`,
  //Cities
  cities: (state_id: string = ':state_id') => `/states/${state_id}/cities`,
  city: (state_id: string = ':state_id', city_id: string = ':id') =>
    `/states/${state_id}/cities/${city_id}`,

  //Zipcode
  zipCode: (zip_code: string = ':zip_code') =>
    `addresses/search_zip_code/${zip_code}`,

  //Clients
  clients: {
    client: '/clients/me',
    clientUpdate: '/clients/update',

    //Orders
    orders: '/clients/orders',
    orderItems: (order_id: string = ':order_id') =>
      `/clients/orders/${order_id}/order_items`,
    orderSingleItem: (
      order_id: string = ':order_id',
      order_item_id: string = ':order_item_id'
    ) => `/clients/orders/${order_id}/order_items/${order_item_id}`,
    singleOrder: (order_id: string = ':order_id') =>
      `/clients/orders/${order_id}`,
    cancelOrder: (order_id: string = ':order_id') =>
      `/clients/orders/${order_id}/cancel`,
    checkoutOrder: (order_id: string = ':order_id') =>
      `/clients/orders/${order_id}/checkout`,
    payOrder: (order_id: string = ':order_id') =>
      `/clients/orders/${order_id}/pay`,
    evaluateOrder: (order_id: string = ':order_id') =>
      `/clients/orders/${order_id}/evaluate`,

    //Addresses
    addresses: '/clients/addresses',
    address: (address_id: string = ':address_id') =>
      `/clients/addresses/${address_id}`,

    //Telephones
    telephones: 'clients/telephones',
    telephone: (telephone_id: string = ':telephone_id') =>
      `clients/telephones/${telephone_id}`
  },

  //Authorization
  login: '/sessions/login',
  logout: '/sessions/logout',
  refreshToken: '/sessions/refresh',
  signup: '/registrations/signup',
  forgotPassword: '/passwords/token',
  resetPassword: '/passwords/reset',

  //Dishes
  dishes: '/dishes',
  dish: (dish_id: string = ':dish_id') => `/dishes/${dish_id}`,
  like: (dish_id: string = ':dish_id') => `/dishes/${dish_id}/like`,
  dislike: (dish_id: string = ':dish_id') => `/dishes/${dish_id}/dislike`,

  //Ratings
  ratings: (dish_id: string = ':dish_id') => `/dishes/${dish_id}/ratings`,
  rating: (dish_id: string = ':dish_id', rating_id: string = ':rating_id') =>
    `/dishes/${dish_id}/ratings/${rating_id}`,
  likeRating: (
    dish_id: string = ':dish_id',
    rating_id: string = ':rating_id'
  ) => `/dishes/${dish_id}/ratings/${rating_id}/like`,
  dislikeRating: (
    dish_id: string = ':dish_id',
    rating_id: string = ':rating_id'
  ) => `/dishes/${dish_id}/ratings/${rating_id}/dislike`,

  //Chefs
  chefs: {
    chefs: '/chefs',
    chef: (chef_id: string = ':chef_id') => `/chef/${chef_id}`,
    //Telephones
    telephones: (chef_id: string = ':chef_id') => `/chef/${chef_id}/telephones`,
    telephone: (
      chef_id: string = ':chef_id',
      telephone_id: string = ':telephone_id'
    ) => `/chef/${chef_id}/telephones/${telephone_id}`,
    //Dishes
    dishes: (chef_id: string = ':chef_id') => `/chefs/${chef_id}/dishes`,
    dish: (chef_id: string = ':chef_id', dish_id: string = ':dish_id') =>
      `/chef/${chef_id}/dishes/${dish_id}`,
    //Orders
    orders: (chef_id: string = ':chef_id') => `/chef/${chef_id}/orders`,
    order: (chef_id: string = ':chef_id', order_id: string = ':order_id') =>
      `/chef/${chef_id}/orders/${order_id}`,
    //Addresses
    address: (
      chef_id: string = ':chef_id',
      address_id: string = ':address_id'
    ) => `/chef/${chef_id}/addresses/${address_id}`
  }
};
