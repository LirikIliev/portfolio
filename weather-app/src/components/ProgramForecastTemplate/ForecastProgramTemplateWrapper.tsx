import { useCallback, useContext } from 'react';

import DailyForecastTemplate from './ForecastProgramTemplate';
import DailyForecastMissingMessage from './ForecastProgramMissingMessage';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { ForecastContext } from '../../context/ForecastContext';

import classes from './ForecastProgramTemplateWrapper.module.scss';

const DailyForecastTemplateWrapper: React.FC = () => {
  const {
    programForecast: {
      timelines: { daily },
    },
    programLoading,
    dailyLoading,
  } = useContext(ForecastContext);

  const isDailyInformationMissed =
    (!dailyLoading && daily.length === 0) || (!dailyLoading && !daily);
  const isDailyInformationAvailable =
    !programLoading && daily && daily?.length > 0;

  const dayInformation = useCallback(
    () =>
      daily.map((day) => (
        <DailyForecastTemplate key={day.time} dayData={day} />
      )),
    [daily]
  );

  return (
    <div className={classes['DailyWrapper']}>
      {programLoading ? <LoadingScreen /> : null}
      {isDailyInformationAvailable ? dayInformation() : null}
      {isDailyInformationMissed ? <DailyForecastMissingMessage /> : null}
    </div>
  );
};

export default DailyForecastTemplateWrapper;
