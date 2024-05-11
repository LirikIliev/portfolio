import { ChangeEvent, MouseEvent, useState } from 'react';

import { useFetchForecastProgramAPI } from '../../hooks/useFetchForecastProgramAPI';
import { useFetchForecastDailyAPI } from '../../hooks/useFetchForecastDailyHourlyAPI';

import Icon from '../../icons/Icon';

import classes from './LocationSearch.module.scss';

const LocationSearch: React.FC = () => {
  const [search, setSearch] = useState<Partial<string>>('');
  const { getProgramForecast } = useFetchForecastProgramAPI();
  const { getDailyForecast } = useFetchForecastDailyAPI();

  const onSubmitSearchRequest = (e: MouseEvent) => {
    e.preventDefault();
    if (search.length > 0) {
      getProgramForecast(search);
      getDailyForecast(search);
      setSearch('');
    }
  };

  const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <form className={classes['Search_form_wrapper']}>
      <div className={classes['Search_inputs_wrapper']}>
        <Icon iconName="Thermometer" size={80} metrics="px" />
        <input
          className={classes['Search_input']}
          type="text"
          value={search}
          onChange={onChangeSearchHandler}
        />
        <button
          className={classes['Search_button']}
          type="submit"
          onClick={onSubmitSearchRequest}
        >
          <Icon iconName="Search" size={25} />
        </button>
      </div>
    </form>
  );
};

export default LocationSearch;
