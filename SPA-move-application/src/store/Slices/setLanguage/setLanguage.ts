import { PayloadAction } from '@reduxjs/toolkit';
import { MovieReduxInterface } from '../../../types/reducerTypes';

export const setLanguage = (
  state: MovieReduxInterface,
  action: PayloadAction<string>
) => {
  state.language = action.payload;
};
