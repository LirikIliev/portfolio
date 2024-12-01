import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { Response } from '../../types/dataTypes';
import { getAirTodayTvs } from '../Slices/airTodayTvsSlice/getAirTodayTvs';

export const extraReducerAirTodayTvs = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getAirTodayTvs.pending, (state) => {
      state.listOfAirTodaysTvs.loading = true;
    })
    .addCase(
      getAirTodayTvs.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfAirTodaysTvs.loading = false;
        state.listOfAirTodaysTvs.listOfTvs = action.payload;
      }
    )
    .addCase(getAirTodayTvs.rejected, (state, action) => {
      state.listOfAirTodaysTvs.loading = false;
      state.listOfAirTodaysTvs.error = action.error as AxiosError;
    });
