import { useContext } from 'react';

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
    programError,
  } = useContext(ForecastContext);

  const isDailyInformationMissed =
    (!programLoading && daily.length === 0) ||
    (!programLoading && !daily) ||
    programError.message.length > 0;
  const isDailyInformationAvailable =
    !programLoading && daily && daily?.length > 0;

  return (
    <div className={classes['DailyWrapper']}>
      {programLoading ? <LoadingScreen /> : null}
      {isDailyInformationAvailable
        ? daily.map((day) => (
            <DailyForecastTemplate key={day.time} dayData={day} />
          ))
        : null}
      {isDailyInformationMissed ? <DailyForecastMissingMessage /> : null}
    </div>
  );
};

export default DailyForecastTemplateWrapper;
