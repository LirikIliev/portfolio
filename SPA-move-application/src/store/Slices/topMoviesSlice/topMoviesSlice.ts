import { PayloadAction } from '@reduxjs/toolkit';

import { MovieReduxInterface } from '../../../types/reducerTypes';
import { Response } from '../../../types/dataTypes';

export const setTopMoviesSlice = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listOfTopMovies.listOfMovies = action.payload;
};
