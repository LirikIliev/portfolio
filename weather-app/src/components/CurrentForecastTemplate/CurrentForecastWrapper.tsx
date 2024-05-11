import CurrentTemperature from './CurrentTemperature';

import classes from './CurrentForecastWrapper.module.scss';
import MoreForecastDetails from './MoreForecastDetails';
import HourlyForecastWrapper from './HourlyForecastWrapper';

const CurrentForecastWrapper: React.FC = () => (
  <div className={classes['Wrapper']}>
    <CurrentTemperature />
    <MoreForecastDetails />
    <HourlyForecastWrapper />
  </div>
);

export default CurrentForecastWrapper;
