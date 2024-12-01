import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { getTopMoviesList } from '../Slices/topMoviesSlice/getTopMoviesList';
import { Response } from '../../types/dataTypes';

export const extraReducerTopMovieList = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getTopMoviesList.pending, (state) => {
      state.listOfTopMovies.loading = true;
    })
    .addCase(
      getTopMoviesList.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfTopMovies.loading = false;
        state.listOfTopMovies.listOfMovies = action.payload;
      }
    )
    .addCase(getTopMoviesList.rejected, (state, action) => {
      state.listOfTopMovies.loading = false;
      state.listOfTopMovies.error = action.payload as AxiosError;
    });
