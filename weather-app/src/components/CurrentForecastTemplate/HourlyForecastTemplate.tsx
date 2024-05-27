import { dateFromString } from '../../helpers/convertStringToDate';
import { DailyDataInterface } from '../../types/forecastTypes';
import Icon from '../../icons/Icon';
import { weatherDailyCodes } from '../../helpers/forecastIconCodes';
import { useContext, useMemo } from 'react';
import { TEMPERATURE_TYPE } from '../../helpers/config';
import { ForecastContext } from '../../context/ForecastContext';
import { useMobileScreenDetection } from '../../hooks/useMobileScreenDetection';

import classes from './HourlyForecastTemplate.module.scss';

const HourlyForecastTemplate: React.FC<DailyDataInterface> = ({
  values,
  time,
}) => {
  const { typeOfTemperature } = useContext(ForecastContext);
  const { weatherCode, temperature, temperatureSign } = values;
  const { hour = '' } = dateFromString(time);
  const { isMobile } = useMobileScreenDetection();

  const hourTemperature = useMemo(
    () =>
      typeOfTemperature === TEMPERATURE_TYPE.celsius
        ? `${temperatureSign} ${temperature} ${TEMPERATURE_TYPE.celsius}`
        : `${temperatureSign} ${temperature} ${TEMPERATURE_TYPE.fahrenheit}`,
    [temperature, temperatureSign, typeOfTemperature]
  );

  return (
    <div className={classes['Wrapper']}>
      <div className={classes['Icon-wrapper']}>
        <Icon
          iconName={
            weatherDailyCodes[weatherCode]
              ? weatherDailyCodes[weatherCode]
              : weatherDailyCodes[0]
          }
          size={isMobile ? 60 : 80}
          styles={{ gridRow: '1 / -1', alignSelf: 'center' }}
        />
      </div>
      <div className={classes['Hourly-data-wrapper']}>
        <p>{hour}</p>
        <p>{hourTemperature}</p>
      </div>
    </div>
  );
};

export default HourlyForecastTemplate;
