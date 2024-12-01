import { PayloadAction } from '@reduxjs/toolkit';

import { MovieReduxInterface } from '../../../types/reducerTypes';
import { Response } from '../../../types/dataTypes';

export const setAirTodayTvs = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listOfAirTodaysTvs.listOfTvs = action.payload;
};
