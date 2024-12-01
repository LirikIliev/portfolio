import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { getPopularMovies } from '../Slices/popularMoviesSlices/getPopularMovie';
import { Response } from '../../types/dataTypes';

export const extraReducerPopularMovies = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getPopularMovies.pending, (state) => {
      state.popularMoviesData.loading = true;
    })
    .addCase(
      getPopularMovies.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.popularMoviesData.loading = false;
        state.popularMoviesData.listOfMovies = action.payload;
      }
    )
    .addCase(getPopularMovies.rejected, (state, action) => {
      state.popularMoviesData.loading = false;
      state.popularMoviesData.error = action.error as AxiosError;
    });
