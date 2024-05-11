import { SetStateAction, useContext, useEffect, useState } from 'react';

import { LatitudeLongitudeInterface } from '../types/hookTypes';
import { useFetchForecastProgramAPI } from './useFetchForecastProgramAPI';
import { useFetchForecastDailyAPI } from './useFetchForecastDailyHourlyAPI';
import { ForecastContext } from '../context/ForecastContext';

const useGetUserLocation = () => {
  const [userLocation, setUserLocation] =
    useState<LatitudeLongitudeInterface | null>();
  const [geoLocationError, setGeoLocationError] =
    useState<SetStateAction<string>>('');
  const { getProgramForecast } = useFetchForecastProgramAPI();
  const { getDailyForecast } = useFetchForecastDailyAPI();
  const { setLocationPermission } = useContext(ForecastContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setLocationPermission(true);
        },
        () => {
          setGeoLocationError('Error getting user location');
        }
      );
    } else {
      setGeoLocationError('Geolocation is not supported by this browser.');
    }
  }, [setLocationPermission]);

  // useEffect(() => {
  //   if (
  //     !geoLocationError &&
  //     userLocation instanceof Object &&
  //     userLocation.latitude &&
  //     userLocation.longitude
  //   )
  //   getProgramForecast(userLocation);
  //   getDailyForecast(userLocation);
  // }, [geoLocationError, getDailyForecast, getProgramForecast, userLocation]);
};

export default useGetUserLocation;
