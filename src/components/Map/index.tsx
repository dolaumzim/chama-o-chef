import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './style.css';

interface Location {
  label: string;
  lat: number;
  lng: number;
}

interface MapProps {
  page: string;
  restaurant: Location[];
  user: Location;
}

const Map: React.FC<MapProps> = ({ page, restaurant, user }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAmQkNzDxZoTNhTNx0nXJB9w6-_ycw4kb8'
  });
  const [map, setMap] = React.useState(null);
  const [markersReady, setMarkersReady] = useState(false);

  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const defaultLocation = {
    lat: -23.55052,
    lng: -46.633308,
    label: 'Localização padrão'
  };

  if (user.lat === undefined) {
    user = defaultLocation;
  }

  useEffect(() => {
    if (restaurant && user) {
      setMarkersReady(true);
    }
  }, [restaurant, user]);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(user);
      restaurant.forEach(marker => bounds.extend(marker));
      map.fitBounds(bounds, 50);
      setMap(map);
      if (isLoaded && markersReady && page === 'home') {
        new window.google.maps.Marker({
          position: user,
          map,
          icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            scaledSize: new window.google.maps.Size(50, 50)
          }
        });
        restaurant.forEach(marker => {
          new window.google.maps.Marker({
            position: marker,
            map,
            icon: {
              url: 'src/assets/imgLogo.svg',
              scaledSize: new window.google.maps.Size(40, 40)
            }
          });
        });
      }
    },
    [isLoaded, markersReady]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (window.google && map) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer({
        suppressMarkers: true
      });
      directionsRenderer.setMap(map);

      if (page === 'details' && restaurant) {
        directionsService.route(
          {
            origin: user,
            destination: restaurant[0],
            travelMode: window.google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
              new window.google.maps.Marker({
                position: result?.routes[0].legs[0].start_location,
                map,
                label: {
                  text: user.label,
                  className: 'map-marker'
                },
                icon: {
                  url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                  scaledSize: new window.google.maps.Size(50, 50)
                }
              });
            } else {
              throw new Error(`Erro ao exibir ${result}`);
            }
          }
        );
      }
    }
  }, [map, page, restaurant, user]);

  return isLoaded && markersReady ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={user}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapContainerClassName="map-container"
    >
      {page === 'home' ? (
        <Marker
          position={user}
          label={user.label}
          options={{
            label: {
              text: user.label,
              className: 'map-marker'
            }
          }}
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            scaledSize: new window.google.maps.Size(50, 50)
          }}
        />
      ) : (
        ''
      )}
      {restaurant.map((marker, index) => (
        <Marker
          key={index}
          position={marker}
          label={marker.label}
          options={{
            label: {
              text: marker.label,
              className: 'map-marker'
            }
          }}
          icon={{
            url: 'src/assets/imgLogo.svg',
            scaledSize: new window.google.maps.Size(40, 40)
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Map);
