import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { Response } from '../../types/dataTypes';
import { getTopRatedTvs } from '../Slices/topRatedTvs/getTopRateTvs';

export const extraReducerListOfTopRatedTvs = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getTopRatedTvs.pending, (state) => {
      state.listOfTopRatedTvs.loading = true;
    })
    .addCase(
      getTopRatedTvs.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listOfTopRatedTvs.loading = false;
        state.listOfTopRatedTvs.listOfTvs = action.payload;
      }
    )
    .addCase(getTopRatedTvs.rejected, (state, action) => {
      state.listOfTopRatedTvs.loading = false;
      state.listOfTopRatedTvs.error = action.error as AxiosError;
    });
