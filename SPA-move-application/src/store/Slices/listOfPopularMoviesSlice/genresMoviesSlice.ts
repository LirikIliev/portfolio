import { PayloadAction } from '@reduxjs/toolkit';

import { Response } from '../../../types/dataTypes';
import { MovieReduxInterface } from '../../../types/reducerTypes';

export const setGenresMovies = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listOfMoviesByGenres.listOfMovies = action.payload;
};
