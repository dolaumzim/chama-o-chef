import { ContainerMap, Title, TitleContainer } from './styles';
import Map from '../Map';
import { apiChef } from '../../services/api';
import * as Props from '../../services/structure';
import { useEffect, useState } from 'react';

interface Cord {
  lat: number;
  lng: number;
  label: string;
}
export const SectionMapHome = () => {
  const [cordChef, setCordChef] = useState<Cord[]>([]);
  const [cordClient, setCordClient] = useState<Cord>();

  useEffect(() => {
    const chefData = async () => {
      const getChefs = await apiChef.get<Props.DataChefResponse>('chefs');
      const cords = getChefs.data.data.map(chef => ({
        lat: chef.address.latitude,
        lng: chef.address.longitude,
        label: chef.name
      }));

      setCordChef(cords);
    };
    const ClientData = async () => {
      const getClient = await apiChef.get<Props.PropsClient>('clients/me');
      const cords = {
        label: getClient.data.name,
        lat: getClient.data.addresses[0].latitude,
        lng: getClient.data.addresses[0].longitude
      };
      setCordClient(cords);
    };
    ClientData();
    chefData();
  }, []);

  const radius = 0.2;

  const getDistance = (location1: Cord, location2: Cord) => {
    const dx = location1.lat - location2.lat;
    const dy = location1.lng - location2.lng;
    return Math.sqrt(dx * dx + dy * dy);
  };
  let nearbyRestaurants: Cord[] = [];
  if (cordClient) {
    nearbyRestaurants = cordChef.filter(
      restaurant => getDistance(cordClient, restaurant) <= radius
    );
  }

  return (
    <ContainerMap>
      <TitleContainer>
        <Title>Chefs próximos de você</Title>
      </TitleContainer>
      {cordChef && cordClient && (
        <Map page={'home'} restaurant={nearbyRestaurants} user={cordClient} />
      )}
    </ContainerMap>
  );
};
