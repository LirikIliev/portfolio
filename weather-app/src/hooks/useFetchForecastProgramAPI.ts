import { useCallback, useContext } from 'react';

import {
  DailyInfoInterface,
  LocationInterface,
  useFetchForecastProgramAPIReturn,
} from '../types/hookTypes';
import { ForecastContext } from '../context/ForecastContext';
import { convertCelsiusToFahrenheit } from '../helpers/convertCelsiusToFahrenheit';
import { roundTemperatureValues } from '../helpers/roundTemperatureValues';
import {
  TEMPERATURE_COLORS,
  defaultProgramForecastValues,
} from '../helpers/config';
import { weatherUrls, apiKey, acceptQueryParam } from './config';

const defaultErrorValue = {
  code: 400,
  type: 'Some problem.',
  message: 'There is some problem, please try again later!',
};

export const useFetchForecastProgramAPI =
  (): useFetchForecastProgramAPIReturn => {
    const {
      setProgramForecast,
      setProgramError,
      setProgramLoading,
      setLocationName,
    } = useContext(ForecastContext);

    const getProgramForecast = useCallback(
      async (location: LocationInterface) => {
        try {
          setProgramLoading(true);
          const isFetchOnGeoLocation =
            location instanceof Object &&
            location.hasOwnProperty('latitude') &&
            location.hasOwnProperty('longitude');

          const forecastResponse = await fetch(
            `${weatherUrls.forecastProgramUrl}?location=${
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

            if (
              parsedResponse?.timelines.daily?.[0]?.values &&
              Array.isArray(parsedResponse?.timelines.daily)
            ) {
              parsedResponse?.timelines?.daily?.forEach(
                (dayData: DailyInfoInterface) => {
                  if (
                    dayData.values?.temperatureMin &&
                    dayData.values?.temperatureMax &&
                    dayData.values?.temperatureAvg
                  ) {
                    dayData.values.temperatureMin = roundTemperatureValues(
                      dayData.values.temperatureMin
                    );
                    dayData.values.temperatureMax = roundTemperatureValues(
                      dayData.values.temperatureMax
                    );
                    dayData.values.temperatureAvg = roundTemperatureValues(
                      dayData.values.temperatureAvg
                    );
                    if (typeof dayData.values.temperatureAvg === 'number')
                      dayData.values.temperatureAvg > 0
                        ? (dayData.values.temperatureSign = '+')
                        : (dayData.values.temperatureSign = '-');

                    const minTemperature = dayData.values.temperatureMin;
                    const maxTemperature = dayData.values.temperatureMax;
                    const averageTemperature = dayData.values.temperatureAvg;
                    dayData.values.temperatureColor =
                      typeof averageTemperature === 'number' &&
                      averageTemperature > 0
                        ? TEMPERATURE_COLORS.plus
                        : TEMPERATURE_COLORS.minus;
                    dayData.values.temperatureMinFahrenheit =
                      convertCelsiusToFahrenheit(
                        typeof minTemperature === 'number'
                          ? minTemperature
                          : null
                      );
                    dayData.values.temperatureMaxFahrenheit =
                      convertCelsiusToFahrenheit(
                        typeof maxTemperature === 'number'
                          ? maxTemperature
                          : null
                      );
                    dayData.values.temperatureAvgFahrenheit =
                      convertCelsiusToFahrenheit(
                        typeof averageTemperature === 'number'
                          ? averageTemperature
                          : null
                      );
                  }
                }
              );
            }

            if (parsedResponse?.location?.name)
              setLocationName(parsedResponse.location.name);
            setProgramForecast(parsedResponse);
          }
        } catch (error: any) {
          if (
            error instanceof Object &&
            error?.hasOwnProperty('code') &&
            error.hasOwnProperty('type') &&
            error.hasOwnProperty('message')
          ) {
            setProgramError(error);
          } else {
            setProgramError(defaultErrorValue);
          }
          setLocationName('');
          setProgramForecast(defaultProgramForecastValues);
        } finally {
          setProgramLoading(false);
        }
      },
      [setLocationName, setProgramError, setProgramForecast, setProgramLoading]
    );

    return {
      getProgramForecast,
    };
  };
