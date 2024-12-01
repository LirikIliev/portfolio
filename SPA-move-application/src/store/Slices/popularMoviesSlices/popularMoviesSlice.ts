import { PayloadAction } from '@reduxjs/toolkit';

import { Response } from '../../../types/dataTypes';
import { MovieReduxInterface } from '../../../types/reducerTypes';

export const setPopularMovies = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.popularMoviesData.listOfMovies = action.payload;
};
