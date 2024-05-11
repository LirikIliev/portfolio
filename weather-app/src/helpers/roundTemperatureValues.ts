export const roundTemperatureValues = (temperatureValue: number | string) => {
  if (typeof temperatureValue === 'number')
    return Math.round(temperatureValue * 2) / 2;

  return temperatureValue;
};
