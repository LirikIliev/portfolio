import { useContext, useMemo } from 'react';

import { DailyDataInterface } from '../../types/forecastTypes';
import { ForecastContext } from '../../context/ForecastContext';
import HourlyForecastTemplate from './HourlyForecastTemplate';
import HourlyForecastTitle from './HourlyForecastTitle';

import classes from './HourlyForecastWrapper.module.scss';
import { dateFromString } from '../../helpers/convertStringToDate';
import { hourlyOrder } from '../../helpers/hourlyOrder';

const HourlyForecastWrapper: React.FC = () => {
  const {
    dailyForecast: {
      timelines: { hourly = [] },
    },
  } = useContext(ForecastContext);

  const hourlyExtractedData = useMemo(
    () => hourly.filter((_, i) => i % 2 === 0),
    [hourly]
  );

  const hourlyForecastTitleOrder = useMemo(() => {
    const forecastHourlyOrder: string[] = [];
    for (let i = 0; i < hourlyExtractedData.length; i += 3) {
      const { time } = hourlyExtractedData[i];
      const { hour } = dateFromString(time);
      forecastHourlyOrder.push(hourlyOrder(hour));
    }
    return forecastHourlyOrder;
  }, [hourlyExtractedData]);

  return (
    <div className={classes['Daily-forecast-wrapper']}>
      <HourlyForecastTitle partOfTheDays={hourlyForecastTitleOrder} />
      <div className={classes['Hourly-wrapper']}>
        {hourlyExtractedData.map((hourDate: DailyDataInterface) => (
          <HourlyForecastTemplate
            key={hourDate.time}
            values={hourDate.values}
            time={hourDate.time}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecastWrapper;
