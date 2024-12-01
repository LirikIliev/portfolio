import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { Response } from '../../types/dataTypes';
import { getUpcomingMovies } from '../Slices/upcomingMoviesSlice/getUpcomingMovies';

export const extraReducerUpcomingMovies = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getUpcomingMovies.pending, (state) => {
      state.listOfUpcomingMovies.loading = true;
    })
    .addCase(
      getUpcomingMovies.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfUpcomingMovies.loading = false;
        state.listOfUpcomingMovies.listOfMovies = action.payload;
      }
    )
    .addCase(getUpcomingMovies.rejected, (state, action) => {
      state.listOfUpcomingMovies.loading = false;
      state.listOfUpcomingMovies.error = action.error as AxiosError;
    });
