import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { Response } from '../../types/dataTypes';
import { getGenresMovieList } from '../Slices/listOfPopularMoviesSlice/getGenresMovieList';

export const extraReducerGenresMovieList = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getGenresMovieList.pending, (state) => {
      state.listOfMoviesByGenres.loading = true;
    })
    .addCase(
      getGenresMovieList.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfMoviesByGenres.loading = false;
        state.listOfMoviesByGenres.listOfMovies = action.payload;
      }
    )
    .addCase(getGenresMovieList.rejected, (state, action) => {
      state.listOfMoviesByGenres.loading = false;
      state.listOfMoviesByGenres.error = action.error as AxiosError;
    });
