import { useContext } from 'react';

import { DailyDataInterface } from '../../types/forecastTypes';
import { ForecastContext } from '../../context/ForecastContext';
import HourlyForecastTemplate from './HourlyForecastTemplate';

import classes from './HourlyForecastWrapper.module.scss';

const HourlyForecastWrapper: React.FC = () => {
  const {
    dailyForecast: {
      timelines: { hourly = [] },
    },
  } = useContext(ForecastContext);

  return (
    <div className={classes['Daily-forecast-wrapper']}>
      <div className={classes['Split-daily-parts']}>
        <p>Night</p>
        <p>Morning</p>
        <p>Day</p>
        <p>Evening</p>
      </div>
      <div className={classes['Hourly-wrapper']}>
        {hourly.map((hourDate: DailyDataInterface, i) =>
          i % 2 === 0 ? (
            <HourlyForecastTemplate
              key={hourDate.time}
              values={hourDate.values}
              time={hourDate.time}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default HourlyForecastWrapper;
