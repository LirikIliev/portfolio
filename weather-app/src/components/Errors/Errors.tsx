import { useContext } from 'react';

import { ForecastContext } from '../../context/ForecastContext';
import { errorTranslator } from '../../helpers/errorTranslator';

import classes from './Error.module.scss';

const Errors: React.FC = () => {
  const { programError, dailyError, programForecast, dailyForecast } =
    useContext(ForecastContext);

  const errorMessage = errorTranslator(programError || dailyError);
  const isThereNoInformation =
    programForecast.timelines.daily.length === 0 ||
    dailyForecast.timelines.hourly.length === 0;

  return (
    <div className={classes.Wrapper}>
      {errorMessage ? <p>{errorMessage}</p> : null}
      {!errorMessage && isThereNoInformation ? (
        <p>Please search to receive region weather information you need for!</p>
      ) : null}
    </div>
  );
};

export default Errors;
