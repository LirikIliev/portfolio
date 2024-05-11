import { useContext } from 'react';

import { ForecastContext } from '../../context/ForecastContext';

import classes from './MoreForecastDetails.module.scss';

const MoreForecastDetails: React.FC = () => {
  const {
    programForecast: {
      timelines: { daily },
    },
  } = useContext(ForecastContext);

  const {
    values: {
      windSpeedMin = '',
      windSpeedMax = '',
      humidityMin = '',
      humidityMax = '',
      pressureSurfaceLevelMin = '',
      pressureSurfaceLevelMax = '',
      precipitationProbabilityAvg = '',
    } = {},
  } = daily?.[0];

  return (
    <div className={classes['Wrapper']}>
      <div>
        <p className={classes['Title']}>More Details:</p>
      </div>
      {windSpeedMin && windSpeedMax ? (
        <div className={classes['WindSpeed-wrapper']}>
          <p className={classes['Info']}>
            <strong className={classes['Info-title']}>Wind speed: </strong>
            {windSpeedMin}/{windSpeedMax}ms.
          </p>
        </div>
      ) : null}
      {humidityMin && humidityMax ? (
        <div className={classes['Humidity-wrapper']}>
          <p className={classes['Info']}>
            <strong className={classes['Info-title']}>Air humidity: </strong>
            {windSpeedMin}/{windSpeedMax}%
          </p>
        </div>
      ) : null}
      {pressureSurfaceLevelMin && pressureSurfaceLevelMax ? (
        <div className={classes['PressureSurf-wrapper']}>
          <p className={classes['Info']}>
            <strong className={classes['Info-title']}>Pressure: </strong>
            {pressureSurfaceLevelMin}/{pressureSurfaceLevelMax}mm.
          </p>
        </div>
      ) : null}
      {pressureSurfaceLevelMin && pressureSurfaceLevelMax ? (
        <div className={classes['Precipitation-wrapper']}>
          <p className={classes['Info']}>
            <strong className={classes['Info-title']}>Precipitation: </strong>
            {precipitationProbabilityAvg}%
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default MoreForecastDetails;
