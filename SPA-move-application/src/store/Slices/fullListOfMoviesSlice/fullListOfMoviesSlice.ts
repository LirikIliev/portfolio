import { PayloadAction } from '@reduxjs/toolkit';
import { Response } from '../../../types/dataTypes';
import { MovieReduxInterface } from '../../../types/reducerTypes';

export const setFullListOfMovies = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.fullListOfMovies.listOfMovies = action.payload;
};
