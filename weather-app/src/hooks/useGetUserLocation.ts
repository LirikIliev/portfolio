import { useContext, useEffect } from 'react';

import { ForecastContext } from '../context/ForecastContext';

const useGetUserLocation = () => {
  const { setLocationName, setUserLocationInfo, setGeoLocationError } =
    useContext(ForecastContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocationInfo({ latitude, longitude });
        },
        () => {
          setGeoLocationError('Error getting user location');
        }
      );
    } else {
      setGeoLocationError('Geolocation is not supported by this browser.');
    }
  }, [setGeoLocationError, setLocationName, setUserLocationInfo]);
};

export default useGetUserLocation;
