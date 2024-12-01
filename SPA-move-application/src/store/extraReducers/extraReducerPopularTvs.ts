import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { MovieReduxInterface } from '../../types/reducerTypes';
import { Response } from '../../types/dataTypes';
import { getPopularTvs } from '../Slices/popularTvsSlice/getPopularTvs';

export const extraReducerPopularTvs = (
  builder: ActionReducerMapBuilder<MovieReduxInterface>
) =>
  builder
    .addCase(getPopularTvs.pending, (state) => {
      state.listPopularTvs.loading = true;
    })
    .addCase(
      getPopularTvs.fulfilled,
      (state, action: PayloadAction<Response>) => {
        state.listPopularTvs.loading = false;
        state.listPopularTvs.listOfTvs = action.payload;
      }
    )
    .addCase(getPopularTvs.rejected, (state, action) => {
      state.listPopularTvs.loading = false;
      state.listPopularTvs.error = action.error as AxiosError;
    });
