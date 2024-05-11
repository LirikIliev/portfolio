import { dateFromString } from '../../helpers/convertStringToDate';
import { DailyDataInterface } from '../../types/forecastTypes';
import Icon from '../../icons/Icon';
import { WeatherDailyCodes } from '../../helpers/forecastIconCodes';
import { useContext, useMemo } from 'react';
import { TEMPERATURE_TYPE } from '../../helpers/config';
import { ForecastContext } from '../../context/ForecastContext';

import classes from './HourlyForecastTemplate.module.scss';

const HourlyForecastTemplate: React.FC<DailyDataInterface> = ({
  values,
  time,
}) => {
  const { typeOfTemperature } = useContext(ForecastContext);
  const { weatherCode, temperature, temperatureSign } = values;
  const { hour = '' } = dateFromString(time);

  const hourTemperature = useMemo(
    () =>
      typeOfTemperature === TEMPERATURE_TYPE.celsius
        ? `${temperatureSign} ${temperature} ${TEMPERATURE_TYPE.celsius}`
        : `${temperatureSign} ${temperature} ${TEMPERATURE_TYPE.fahrenheit}`,
    [temperature, temperatureSign, typeOfTemperature]
  );

  return (
    <div className={classes['Wrapper']}>
      <div>
        <Icon
          iconName={
            WeatherDailyCodes[weatherCode]
              ? WeatherDailyCodes[weatherCode]
              : WeatherDailyCodes[0]
          }
          size={80}
          styles={{ gridRow: '1 / -1', alignSelf: 'center' }}
        />
      </div>
      <div>
        <p>{hour}</p>
      </div>
      <div>
        <p>{hourTemperature}</p>
      </div>
    </div>
  );
};

export default HourlyForecastTemplate;
