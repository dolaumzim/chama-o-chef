export interface ClientAddress {
  id: string;
  name: string;
  public_place: string;
  zip_code: number;
  number: number;
  neighborhood: string;
  reference: string;
  complement: string;
  latitude: number;
  longitude: number;
  city_id: string;
  addressable_type: string;
  addressable_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ClientTelephone {
  id: string;
  number: number | null;
  contactable_type: string;
  contactable_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface PropsLogin {
  user: {
    email: string;
    id: string;
    name: string;
    password: string;
    passwordConfirmation: string;
    created_at: Date;
    updated_at: Date;
    telephones: ClientTelephone[];
    addresses: ClientAddress[];
  };
  access_token: string;
  refresh_token: string;
}

export interface AddressAttributes {
  name: string;
  public_place: string;
  zip_code: string;
  number: number | null | string;
  neighborhood: string;
  reference: string;
  complement: string;
  city_id: string;
  latitude: number | null;
  longitude: number | null;
}

export interface SignUpLocal {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  telephones_attributes: {
    number: number | null;
  }[];
  addresses_attributes?: AddressAttributes[];
}

export interface PropsSignUp {
  user: SignUpLocal;
}

export interface AddressProps {
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  service: string;
  location: {
    type: string;
    coordinates: {
      longitude: string;
      latitude: string;
    };
  };
  city_id: string;
}

export interface PropsDelete {}

export interface PropsClient {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  telephones: ClientTelephone[];
  addresses: ClientAddress[];
}

export interface ClientAddresses {
  data: ClientAddress[];
  meta: Meta;
}

export interface Meta {
  current_page: number;
  previous_page: number | null; //não tenho certeza se é number, na api é só null
  next_page: number | null; //não tenho certeza se é number, na api é só null
  items_per_page: number;
  total_pages: number;
  total_items: number;
}

export interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Categories {
  data: Category[];
  meta: Meta;
}

export interface Rating {
  id: string;
  user_id: string;
  dish_id: string;
  rate: number;
  comment: string;
  created_at: string;
  updated_at: string;
  user_name: string;
  likes: Like[];
  dislikes: Like[];
}

export interface Chef {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Like {
  id: string;
  votable_type: string;
  votable_id: string;
  voter_type: string;
  voter_id: string;
  created_at: string;
  updated_at: string;
}

export interface DishData {
  id: string;
  chef_id: string;
  name: string;
  description: string;
  available: boolean;
  active: boolean;
  unit_price: string;
  created_at: string;
  updated_at: string;
  categories: Category[];
  images: string[];
  ratings: Rating[];
  chef: Chef;
  liked_by_me: boolean;
  disliked_by_me: boolean;
  likes: Like[];
}

export interface DishesApiResponse {
  data: DishData[];
}

export interface StateData {
  id: string;
  name: string;
  acronym: string;
  created_at: Date;
  updated_at: Date;
}

export interface StatesData {
  data: StateData[];
  meta: Meta;
}

export interface City {
  id: string;
  name: string;
  state_id: string;
  created_at: Date;
  updated_at: Date;
  state: StateData;
}

export interface Cities {
  data: City[];
  meta: Meta;
}

export interface Telephone {
  id: string;
  number: string;
  contactable_type: string;
  contactable_id: string;
  created_at: string;
  updated_at: string;
}

export interface Address {
  id: string;
  name: string;
  public_place: string;
  zip_code: string;
  number: string;
  neighborhood: string;
  reference: string;
  complement: string;
  latitude: number;
  longitude: number;
  city_id: string;
  addressable_type: string;
  addressable_id: string;
  created_at: string;
  updated_at: string;
}

export interface DataChefs {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  address: Address;
  telephones: Telephone[];
}

export interface DataChefResponse {
  data: DataChefs[];
}

export interface Chef {
  id: string;
  name: string;
  email: string;
  address: Address;
  telephones: Telephone[];
}

export interface ChefResponse {
  data: Chef;
}

export interface OrderProps {
  delivery_address_id: string;
  items_attributes: {
    dish_id: string;
    amount: number | null;
  }[];
}

export interface OrderResponse {
  id: string;
  client_id: string;
  delivery_address_id: string;
  total_price: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  delivery_address: Address;
  items: {
    id: string;
    order_id: string;
    dish_id: string;
    amount: number | null;
    unit_price: number | null;
    created_at: Date;
    updated_at: Date;
  }[];
}

export interface CheckoutProps {
  client_id: string;
  id: string;
  delivery_address_id: string;
  total_price: number | null;
  status: string;
  created_at: Date;
  updated_at: Date;
  payment_link: string;
}

export interface RatingsProps {
  dish_id: string;
  rate: number | null;
  comment: string;
}

export interface CarouselItemsProps {
    id: string;
    image: string;
    name: string;
    price: string;
    restaurantName: string;
    rating: string;
    isFavorite: boolean;
}

export interface CarouselProps {
  items: CarouselItemsProps[];
  onToggleFavorite?: (dishId: string, isFavorite: boolean) => void;
}