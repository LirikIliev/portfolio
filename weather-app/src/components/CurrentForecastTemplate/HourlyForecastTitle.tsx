import classes from './HourlyForecastTitle.module.scss';

interface HourlyForecastTitleInterface {
  partOfTheDays: string[];
}

const HourlyForecastTitle: React.FC<HourlyForecastTitleInterface> = ({
  partOfTheDays,
}) => {
  const [firstPart = '', secondPart = '', thirdPart = '', fourthPart = ''] =
    partOfTheDays?.length > 0 ? partOfTheDays : [];

  return (
    <div className={classes['Split-daily-parts']}>
      <p>{firstPart}</p>
      <p>{secondPart}</p>
      <p>{thirdPart}</p>
      <p>{fourthPart}</p>
    </div>
  );
};

export default HourlyForecastTitle;
