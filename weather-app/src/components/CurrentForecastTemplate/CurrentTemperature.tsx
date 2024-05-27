import { useContext, useMemo } from 'react';

import { ForecastContext } from '../../context/ForecastContext';
import { dateFromString } from '../../helpers/convertStringToDate';
import { weatherDailyCodes } from '../../helpers/forecastIconCodes';
import { TEMPERATURE_TYPE } from '../../helpers/config';
import Icon from '../../icons/Icon';

import classes from './CurrentTemperature.module.scss';

const CurrentTemperature: React.FC = () => {
  const {
    programForecast: {
      timelines: { daily = [] },
    },
    typeOfTemperature,
  } = useContext(ForecastContext);

  const {
    time = '',
    values: {
      temperatureMin = '',
      temperatureMinFahrenheit = '',
      temperatureMax = '',
      temperatureMaxFahrenheit = '',
      weatherCodeMax = 0,
      temperatureColor = '',
      temperatureSign = '',
      sunriseTime = '',
      sunsetTime = '',
    },
  } = useMemo(() => daily[0], [daily]);
  const { day, month, dateOfMonth } = dateFromString(time);
  const { hour: sunriseHour } = dateFromString(sunriseTime);
  const { hour: sunsetHour } = dateFromString(sunsetTime);

  const minTemperature = useMemo(
    () =>
      typeOfTemperature === TEMPERATURE_TYPE.celsius &&
      typeof temperatureMin === 'number'
        ? `${temperatureSign} ${temperatureMin}`
        : `${temperatureSign} ${temperatureMinFahrenheit}`,
    [
      temperatureMin,
      temperatureMinFahrenheit,
      temperatureSign,
      typeOfTemperature,
    ]
  );

  const maxTemperature = useMemo(
    () =>
      typeOfTemperature === TEMPERATURE_TYPE.celsius
        ? `${temperatureSign} ${temperatureMax} ${TEMPERATURE_TYPE.celsius}`
        : `${temperatureSign} ${temperatureMaxFahrenheit} ${TEMPERATURE_TYPE.fahrenheit}`,
    [
      temperatureMax,
      temperatureMaxFahrenheit,
      temperatureSign,
      typeOfTemperature,
    ]
  );

  return (
    <div className={classes['Wrapper']}>
      <Icon
        iconName={
          weatherDailyCodes[weatherCodeMax]
            ? weatherDailyCodes[weatherCodeMax]
            : weatherDailyCodes[0]
        }
        size={80}
        styles={{ gridRow: '1 / -1', alignSelf: 'center' }}
      />
      <div className={classes['Forecast-information']}>
        <div className={classes['Date-wrapper']}>
          <p className={classes['Text']}>
            {day} {month} {dateOfMonth}
          </p>
        </div>
        <div
          className={classes['Temperature-wrapper']}
          style={{ color: temperatureColor ? temperatureColor : '' }}
        >
          {temperatureMin ? (
            <p className={classes['Data']}>
              <strong>{minTemperature}</strong>
            </p>
          ) : null}
          <p>/</p>
          {temperatureMax ? (
            <p className={classes['Data']}>
              <strong>{maxTemperature}</strong>
            </p>
          ) : null}
        </div>
        <div className={classes['Sunrise-sunset-wrapper']}>
          <p className={classes['Sunrise-data']}>
            <strong className={classes['Data-title']}>Sunrise: </strong>
            {sunriseHour}
          </p>
          <p className={classes['Sunset-data']}>
            <strong className={classes['Data-title']}>Sunset: </strong>
            {sunsetHour}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentTemperature;
