import { Error } from '../types/forecastTypes';
import {
  defaultErrorMessage,
  forecastResponseErrorCodes,
} from './forecastErrorCodes';

export const errorTranslator = (error: null | Error): string | null => {
  if (error !== null) {
    const { code } = error;

    return forecastResponseErrorCodes[code]
      ? forecastResponseErrorCodes[code]
      : defaultErrorMessage;
  }

  return null;
};
