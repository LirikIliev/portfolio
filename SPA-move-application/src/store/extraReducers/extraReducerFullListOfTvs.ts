import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { Response } from '../../types/dataTypes';
import { getFullListOfTvs } from '../Slices/fullListOfTvsSlice/getFullListOfTvs';

export const extraReducerFullListOfTvs = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getFullListOfTvs.pending, (state) => {
      state.listOfTvs.loading = true;
    })
    .addCase(
      getFullListOfTvs.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfTvs.loading = false;
        state.listOfTvs.listOfTvs = action.payload;
      }
    )
    .addCase(getFullListOfTvs.rejected, (state, action) => {
      state.listOfTvs.loading = false;
      state.listOfTvs.error = action.error as AxiosError;
    });
