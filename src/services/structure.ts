export interface PropsLogin {
  user: {
    email: string;
    id: string;
    name: string;
    password: string;
    passwordConfirmation: string;
    created_at: Date;
    updated_at: Date;
    telephones: [
      {
        id: string;
        number: number;
        contactable_type: string;
        contactable_id: string;
        created_at: Date;
        updated_at: Date;
      }
    ];
    addresses: [
      {
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
    ];
  };
  access_token: string;
  refresh_token: string;
}

export interface PropsSignUp {
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    telephones_attributes: {
      number: number;
    };
    addresses_attributes: {
      name: string;
      public_place: string;
      zip_code: string;
      number: number;
      neighborhood: string;
      reference: string;
      complement: string;
      city_id: string;
      latitude: number;
      longitude: number;
    };
  };
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
export interface PropsDishes {
  data: [
    {
      id: string;
      chef_id: string;
      name: string;
      description: string;
      available: boolean;
      active: boolean;
      unit_price: string;
      created_at: Date;
      updated_at: Date;
      categories: [
        {
          id: string;
          name: string;
          created_at: Date;
          updated_at: Date;
        }
      ];
      images: [string];
      chef: {
        id: string;
        name: string;
        email: string;
        created_at: Date;
        updated_at: Date;
      };
      like_id: null;
    }
  ];
}
