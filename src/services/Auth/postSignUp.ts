import { backendRoutesApi } from '..';
import { apiChef } from '../api';
import * as Props from '../structure';

export const postSignUpRequest = (values: Props.PropsSignUp) => {
  return apiChef.post<Props.PropsSignUp>(backendRoutesApi.signup, {
    user: {
      name: values.user.name,
      email: values.user.email,
      password: values.user.password,
      password_confirmation: values.user.password_confirmation,
      telephoneNumber: [
        {
          number: values.user.telephones_attributes.number
        }
      ],
      addresses_attributes: [
        {
          name: values.user.addresses_attributes.name,
          public_place: values.user.addresses_attributes.public_place,
          zip_code: values.user.addresses_attributes.zip_code,
          number: values.user.addresses_attributes.number,
          neighborhood: values.user.addresses_attributes.neighborhood,
          reference: values.user.addresses_attributes.reference,
          complement: values.user.addresses_attributes.complement,
          city_id: values.user.addresses_attributes.city_id,
          latitude: values.user.addresses_attributes.latitude,
          longitude: values.user.addresses_attributes.longitude
        }
      ]
    }
  });
};
