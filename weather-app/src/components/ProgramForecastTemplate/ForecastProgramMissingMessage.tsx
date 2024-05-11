import classes from './ForecastProgramMissingMessage.module.scss';

const DailyForecastMissingMessage: React.FC = () => (
  <div className={classes['Wrapper']}>
    <p className={classes['Text']}>We are sorry, could you try later ?</p>
    <p className={classes['Text']}>There has no data for this place yet.</p>
  </div>
);

export default DailyForecastMissingMessage;
