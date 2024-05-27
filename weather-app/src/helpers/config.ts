export const TEMPERATURE_TYPE = {
  celsius: '°C',
  fahrenheit: '°F',
};

export const TEMPERATURE_SIGNS = {
  plus: '+',
  minus: '-',
};

export const TEMPERATURE_COLORS = {
  plus: 'rgb(255, 220, 20)',
  minus: 'rgb(20, 161, 255)',
};

export const defaultProgramForecastValues = {
  location: { lat: 0, lon: 0, name: '', type: '' },
  timelines: { daily: [], hourly: [], minutely: [] },
};

export const defaultDailyForecastValue = {
  location: { lat: 0, lon: 0, name: '', type: '' },
  timelines: { hourly: [], daily: [] },
};
