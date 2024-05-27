import { memo, useContext, useEffect } from 'react';

import { ForecastContext } from './context/ForecastContext';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Header from './components/Header/Header';
import DailyForecastTemplateWrapper from './components/ProgramForecastTemplate/ForecastProgramTemplateWrapper';
import CurrentForecastWrapper from './components/CurrentForecastTemplate/CurrentForecastWrapper';
import Modal from './components/Modal/Modal';

import './App.css';
import Errors from './components/Errors/Errors';
import { useFetchForecastProgramAPI } from './hooks/useFetchForecastProgramAPI';
import { useFetchForecastDailyAPI } from './hooks/useFetchForecastDailyHourlyAPI';
import useGetUserLocation from './hooks/useGetUserLocation';

const App = () => {
  const {
    isModalOpen,
    programForecast: {
      timelines: { daily, hourly },
    },
    geoLocationError,
    userLocationInfo,
  } = useContext(ForecastContext);
  const { getProgramForecast } = useFetchForecastProgramAPI();
  const { getDailyForecast } = useFetchForecastDailyAPI();
  useGetUserLocation();

  useEffect(() => {
    if (
      !geoLocationError &&
      userLocationInfo instanceof Object &&
      userLocationInfo.latitude &&
      userLocationInfo.longitude
    ) {
      getProgramForecast(userLocationInfo);
      getDailyForecast(userLocationInfo);
    }
  }, [
    geoLocationError,
    getDailyForecast,
    getProgramForecast,
    userLocationInfo,
  ]);

  const isForecastAvailable = daily.length > 0 && hourly.length > 0;

  return (
    <div className="App">
      <header className="header-section">
        <Header />
        <LocationSearch />
      </header>
      <main className="main-section">
        {isForecastAvailable ? (
          <>
            <CurrentForecastWrapper />
            <DailyForecastTemplateWrapper />
          </>
        ) : (
          <Errors />
        )}
      </main>
      {isModalOpen ? <Modal /> : null}
    </div>
  );
};

export default memo(App);
