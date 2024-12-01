import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { Response } from '../../types/dataTypes';
import { getListOfOnTheAirTvs } from '../Slices/onTheAirTvsSlice/getListOfOnTheAirTvs';

export const extraReducerListOfOnTheAirTvs = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getListOfOnTheAirTvs.pending, (state) => {
      state.listOfAirTodaysTvs.loading = true;
    })
    .addCase(
      getListOfOnTheAirTvs.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfAirTodaysTvs.loading = false;
        state.listOfAirTodaysTvs.listOfTvs = action.payload;
      }
    )
    .addCase(getListOfOnTheAirTvs.rejected, (state, action) => {
      state.listOfAirTodaysTvs.loading = false;
      state.listOfAirTodaysTvs.error = action.error as AxiosError;
    });
