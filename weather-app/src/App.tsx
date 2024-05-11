import { useContext } from 'react';

import useGetUserLocation from './hooks/useGetUserLocation';
import { ForecastContext } from './context/ForecastContext';
import LocationSearch from './components/LocationSearch/LocationSearch';
import Header from './components/Header/Header';
import DailyForecastTemplateWrapper from './components/ProgramForecastTemplate/ForecastProgramTemplateWrapper';

import './App.css';
import CurrentForecastWrapper from './components/CurrentForecastTemplate/CurrentForecastWrapper';

const App = () => {
  useGetUserLocation();
  const {
    programForecast: {
      timelines: { daily, hourly },
    },
  } = useContext(ForecastContext);

  const isForecastAvailable = daily.length > 0 && hourly.length > 0;

  return (
    <div className="App">
      <section className="Header-section">
        <Header />
        <LocationSearch />
      </section>
      {isForecastAvailable ? (
        <section className="Body-section">
          <CurrentForecastWrapper />
          <DailyForecastTemplateWrapper />
        </section>
      ) : null}
    </div>
  );
};

export default App;
