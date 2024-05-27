import { ChangeEvent, MouseEvent, useState } from 'react';

import { useFetchForecastProgramAPI } from '../../hooks/useFetchForecastProgramAPI';
import { useFetchForecastDailyAPI } from '../../hooks/useFetchForecastDailyHourlyAPI';
import { useMobileScreenDetection } from '../../hooks/useMobileScreenDetection';
import Icon from '../../icons/Icon';

import classes from './LocationSearch.module.scss';

const LocationSearch: React.FC = () => {
  const [search, setSearch] = useState<Partial<string>>('');
  const { getProgramForecast } = useFetchForecastProgramAPI();
  const { getDailyForecast } = useFetchForecastDailyAPI();
  const { isMobile } = useMobileScreenDetection();

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
        <Icon iconName="Thermometer" size={isMobile ? 40 : 50} metrics="px" />
        <input
          className={classes['Search_input']}
          type="search"
          value={search}
          onChange={onChangeSearchHandler}
        />
        <button
          className={classes['Search_button']}
          type="submit"
          onClick={onSubmitSearchRequest}
        >
          <Icon iconName="Search" size={isMobile ? 20 : 30} metrics="px" />
        </button>
      </div>
    </form>
  );
};

export default LocationSearch;
