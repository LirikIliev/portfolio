import { useContext, useEffect } from 'react';
import { ForecastContext } from '../context/ForecastContext';

const useGetUserLocation = () => {
  const { setUserLocationInfo, setGeoLocationError } =
    useContext(ForecastContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocationInfo({ latitude, longitude });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setGeoLocationError('User denied the request for Geolocation.');
              break;
            case error.POSITION_UNAVAILABLE:
              setGeoLocationError('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              setGeoLocationError(
                'The request to get user location timed out.'
              );
              break;
            default:
              setGeoLocationError('An unknown error occurred.');
          }
        }
      );
    } else {
      setGeoLocationError('Geolocation is not supported by this browser.');
    }
  }, [setGeoLocationError, setUserLocationInfo]);
};

export default useGetUserLocation;
