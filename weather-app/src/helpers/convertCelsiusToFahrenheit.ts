export const convertCelsiusToFahrenheit = (celsius: number | null) =>
  celsius ? (celsius * 9) / 5 + 32 : '-----------';
