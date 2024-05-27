import { useContext } from 'react';

import Icon from '../../icons/Icon';
import { ForecastContext } from '../../context/ForecastContext';
import { dateFromString } from '../../helpers/convertStringToDate';
import {
  weatherDailyCodes,
  weatherIconsNames,
} from '../../helpers/forecastIconCodes';

import classes from './ModalTemplate.module.scss';
import { useMobileScreenDetection } from '../../hooks/useMobileScreenDetection';
import { TEMPERATURE_TYPE } from '../../helpers/config';

const ModalTemplate: React.FC = () => {
  const { detailForecast, typeOfTemperature } = useContext(ForecastContext);
  const { day, month, dateOfMonth } = dateFromString(
    detailForecast?.time ? detailForecast.time : ''
  );
  const { hour: sunriseTime } = dateFromString(
    detailForecast?.values?.sunriseTime
      ? detailForecast?.values?.sunriseTime
      : ''
  );
  const { hour: sunsetTime } = dateFromString(
    detailForecast?.values?.sunsetTime ? detailForecast?.values?.sunsetTime : ''
  );
  const { isMobile } = useMobileScreenDetection();

  return (
    <div className={classes['Wrapper']}>
      <div className={classes['Day-wrapper']}>
        <p>{day}</p>
        <p>{dateOfMonth}</p>
        <p>{month}</p>
      </div>
      <div className={classes['Left-column']}>
        {sunriseTime ? (
          <div className={classes['Data-wrapper']}>
            <div className={classes['Sunrise-wrapper']}>
              <Icon
                iconName={weatherIconsNames['Sunrise']}
                size={isMobile ? 25 : 11}
              />
              <h4>Sunrise : </h4>
              <p className={classes['Text']}>{sunriseTime} h.</p>
            </div>
          </div>
        ) : null}
        {sunriseTime ? (
          <div className={classes['Sunset-wrapper']}>
            <Icon
              iconName={weatherIconsNames['Sunset']}
              size={isMobile ? 25 : 11}
            />
            <h4>Sunset : </h4>
            <p>{sunsetTime} h.</p>
          </div>
        ) : null}
        {detailForecast?.values?.windSpeedAvg ? (
          <div className={classes['Wind-wrapper']}>
            <Icon
              iconName={weatherIconsNames['Wind']}
              size={isMobile ? 25 : 11}
            />
            <h4>Win speed :</h4>
            <p>{detailForecast?.values?.windSpeedAvg} ms.</p>
          </div>
        ) : null}
        {detailForecast?.values?.temperatureMin ||
        detailForecast?.values?.temperatureMax ? (
          <div className={classes['Temperature-wrapper']}>
            <Icon
              iconName={weatherIconsNames['Thermometer']}
              size={isMobile ? 25 : 11}
            />
            <h4>Temperature :</h4>
            <p>
              {typeOfTemperature === TEMPERATURE_TYPE.celsius
                ? detailForecast.values.temperatureMin +
                  TEMPERATURE_TYPE.celsius
                : detailForecast?.values?.temperatureMinFahrenheit +
                  TEMPERATURE_TYPE.fahrenheit}{' '}
              /{' '}
              {typeOfTemperature === TEMPERATURE_TYPE.celsius
                ? detailForecast.values.temperatureMax +
                  TEMPERATURE_TYPE.celsius
                : detailForecast?.values?.temperatureMinFahrenheit +
                  TEMPERATURE_TYPE.fahrenheit}{' '}
            </p>
          </div>
        ) : null}
        {detailForecast?.values?.cloudBaseAvg ? (
          <div className={classes['Cloud-Base-wrapper']}>
            <Icon
              iconName={weatherDailyCodes[1001]}
              size={isMobile ? 25 : 11}
            />
            <h4>Cloud base :</h4>
            <p>{detailForecast?.values?.cloudBaseAvg}</p>
          </div>
        ) : null}
      </div>
      <div className={classes['Right-column']}>
        {detailForecast?.values?.humidityAvg ? (
          <div className={classes['Air-humidity-wrapper']}>
            <Icon
              iconName={weatherIconsNames['Humidity']}
              size={isMobile ? 25 : 11}
            />
            <h4>Air humidity :</h4>
            <p>{detailForecast?.values?.humidityAvg} %</p>
          </div>
        ) : null}
        {detailForecast?.values?.uvIndexAvg ? (
          <div className={classes['Uv-index-wrapper']}>
            <Icon
              iconName={weatherIconsNames['UvIndex']}
              size={isMobile ? 25 : 11}
            />
            <h4>Uv Index :</h4>
            <p>{detailForecast?.values?.uvIndexAvg}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ModalTemplate;
