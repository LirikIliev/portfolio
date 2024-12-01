import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { getFullListOfMovies } from '../Slices/fullListOfMoviesSlice/getFullListOfMovies';
import { Response } from '../../types/dataTypes';

export const extraReducerFullMovieList = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getFullListOfMovies.pending, (state) => {
      state.fullListOfMovies.loading = true;
    })
    .addCase(
      getFullListOfMovies.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.fullListOfMovies.loading = false;
        state.fullListOfMovies.listOfMovies.page = action.payload.page;
        state.fullListOfMovies.listOfMovies.total_pages =
          action.payload.total_pages;
        state.fullListOfMovies.listOfMovies.total_results =
          action.payload.total_results;

        if (state.fullListOfMovies.listOfMovies.results.length === 0) {
          // First request, set the movies directly
          state.fullListOfMovies.listOfMovies.results = action.payload.results;
        } else {
          // Subsequent requests, append the new movies
          state.fullListOfMovies.listOfMovies.results = [
            ...state.fullListOfMovies.listOfMovies.results,
            ...action.payload.results,
          ];
        }
      }
    )
    .addCase(getFullListOfMovies.rejected, (state, action) => {
      state.fullListOfMovies.loading = false;
      state.fullListOfMovies.error = action.error as AxiosError;
    });
