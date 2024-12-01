import { PayloadAction } from '@reduxjs/toolkit';
import { MovieReduxInterface } from '../../../types/reducerTypes';
import { Response } from '../../../types/dataTypes';

export const setPopularTvs = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listPopularTvs.listOfTvs = action.payload;
};
