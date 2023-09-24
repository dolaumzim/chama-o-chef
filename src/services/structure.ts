export interface PropsLogin {
  user: {
    email: string;
    id: string;
    name: string;
    password: string;
    passwordConfirmation: string;
    created_at: Date;
    updated_at: Date;
    telephones: {
      id: string;
      number: number;
      contactable_type: string;
      contactable_id: string;
      created_at: Date;
      updated_at: Date;
    }[];

    addresses: {
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
    }[];
  };
  access_token: string;
  refresh_token: string;
}

export interface SignUpLocal {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  telephones_attributes: {
    number: number | null;
  }[];
  addresses_attributes?: {
    name: string;
    public_place: string;
    zip_code: string;
    number: number | null;
    neighborhood: string;
    reference: string;
    complement: string;
    city_id: string;
    latitude: number | null;
    longitude: number | null;
  }[];
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
  telephones: {
    id: string;
    number: number;
    contactable_type: string;
    contactable_id: string;
    created_at: Date;
    updated_at: Date;
  };

  addresses: {
    id: string;
    name: string;
    public_place: string;
    zip_code: number;
    number: number;
    neighborhood: string;
    reference: string;
    complement: string;
    latitude: string;
    longitude: string;
    city_id: string;
    addressable_type: string;
    addressable_id: string;
    created_at: Date;
    updated_at: Date;
  };
}
export interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
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
