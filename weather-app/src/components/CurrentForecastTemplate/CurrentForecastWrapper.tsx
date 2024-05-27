import CurrentTemperature from './CurrentTemperature';

import ForecastDetails from './ForecastDetails';
import HourlyForecastWrapper from './HourlyForecastWrapper';
import { useContext } from 'react';
import { ForecastContext } from '../../context/ForecastContext';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import classes from './CurrentForecastWrapper.module.scss';

const CurrentForecastWrapper: React.FC = () => {
  const { dailyForecast, dailyLoading } = useContext(ForecastContext);

  const {
    timelines: { daily, hourly },
  } = dailyForecast;

  const isHourlyInformationAvailable =
    !dailyLoading && hourly && hourly?.length > 0;
  const isDailyInformationAvailable =
    !dailyLoading && daily && daily.length > 0;

  return (
    <div
      className={
        classes[
          isDailyInformationAvailable && isHourlyInformationAvailable
            ? 'Wrapper'
            : 'Loading_wrapper'
        ]
      }
    >
      {isDailyInformationAvailable && isHourlyInformationAvailable ? (
        <>
          <CurrentTemperature />
          <ForecastDetails />
          <HourlyForecastWrapper />
        </>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default CurrentForecastWrapper;
