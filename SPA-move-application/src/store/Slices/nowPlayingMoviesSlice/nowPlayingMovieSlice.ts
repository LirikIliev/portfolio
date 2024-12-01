import { PayloadAction } from '@reduxjs/toolkit';
import { MovieReduxInterface } from '../../../types/reducerTypes';
import { Response } from '../../../types/dataTypes';

export const setNowPlayingMovieSlice = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listOfNowPlayingMovies.listOfMovies = action.payload;
};
