import { useCallback, useContext } from 'react';
import { DailyInfoInterface, LocationInterface } from '../types/hookTypes';
import { acceptQueryParam, apiKey, weatherUrls } from './config';
import { ForecastContext } from '../context/ForecastContext';
import {
  TEMPERATURE_COLORS,
  defaultDailyForecastValue,
} from '../helpers/config';
import { convertCelsiusToFahrenheit } from '../helpers/convertCelsiusToFahrenheit';
import { roundTemperatureValues } from '../helpers/roundTemperatureValues';

export const useFetchForecastDailyAPI = () => {
  const { setDailyForecast, setDailyError, setDailyLoading } =
    useContext(ForecastContext);

  const getDailyForecast = useCallback(
    async (location: LocationInterface) => {
      try {
        setDailyLoading(true);
        const isFetchOnGeoLocation =
          location instanceof Object &&
          location.hasOwnProperty('Latitude') &&
          location.hasOwnProperty('Longitude');
        const forecastResponse = await fetch(
          `${weatherUrls.forecastDailyUrl}?location=${
            isFetchOnGeoLocation
              ? location.latitude + ',' + location.longitude
              : location
          }&apikey=${apiKey}${acceptQueryParam}`
        );

        if (!forecastResponse.ok) {
          const errorResponseHandling = await forecastResponse.json();
          throw errorResponseHandling;
        }

        if (forecastResponse.status === 200) {
          const parsedResponse = await forecastResponse.json();
          setDailyForecast(parsedResponse);

          if (
            parsedResponse?.timelines.daily?.[0]?.values &&
            Array.isArray(parsedResponse?.timelines.daily)
          ) {
            parsedResponse?.timelines?.hourly?.forEach(
              (hourlyData: DailyInfoInterface) => {
                if (hourlyData.values?.temperature) {
                  hourlyData.values.temperature = roundTemperatureValues(
                    hourlyData.values.temperature
                  );

                  if (typeof hourlyData.values.temperature === 'number')
                    hourlyData.values.temperature > 0
                      ? (hourlyData.values.temperatureSign = '+')
                      : (hourlyData.values.temperatureSign = '-');

                  const temperature = hourlyData.values.temperature;
                  hourlyData.values.temperatureColor =
                    typeof temperature === 'number' && temperature > 0
                      ? TEMPERATURE_COLORS.plus
                      : TEMPERATURE_COLORS.minus;
                  hourlyData.values.temperatureFahrenheit =
                    convertCelsiusToFahrenheit(
                      typeof temperature === 'number' ? temperature : null
                    );
                }
              }
            );
          }
        }
      } catch (error: any) {
        if (
          error instanceof Object &&
          error?.hasOwnProperty('code') &&
          error.hasOwnProperty('type') &&
          error.hasOwnProperty('message')
        ) {
          setDailyError(error);
        } else {
          setDailyError(error);
        }
        setDailyError(error);
        setDailyForecast(defaultDailyForecastValue);
      } finally {
        setDailyLoading(false);
      }
    },
    [setDailyError, setDailyForecast, setDailyLoading]
  );

  return {
    getDailyForecast,
  };
};
