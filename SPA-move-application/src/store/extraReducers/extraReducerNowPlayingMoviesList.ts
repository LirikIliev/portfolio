import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { getNowPlayingMovies } from '../Slices/nowPlayingMoviesSlice/getNowPlayingMovies';
import { Response } from '../../types/dataTypes';

export const extraReducerNowPlayingMovies = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getNowPlayingMovies.pending, (state) => {
      state.listOfNowPlayingMovies.loading = true;
    })
    .addCase(
      getNowPlayingMovies.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfNowPlayingMovies.loading = false;
        state.listOfNowPlayingMovies.listOfMovies = action.payload;
      }
    )
    .addCase(getNowPlayingMovies.rejected, (state, action) => {
      state.listOfNowPlayingMovies.loading = false;
      state.listOfNowPlayingMovies.error = action.error as AxiosError;
    });
