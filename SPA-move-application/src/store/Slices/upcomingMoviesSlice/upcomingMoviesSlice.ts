import { PayloadAction } from '@reduxjs/toolkit';

import { Response } from '../../../types/dataTypes';
import { MovieReduxInterface } from '../../../types/reducerTypes';

export const setUpcomingMovies = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listOfUpcomingMovies.listOfMovies = action.payload;
};
