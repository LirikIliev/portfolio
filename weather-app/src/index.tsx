import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ForecastContextProvider from './context/ForecastContext';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ForecastContextProvider>
    <App />
  </ForecastContextProvider>
);

reportWebVitals();
