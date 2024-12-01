import { PayloadAction } from '@reduxjs/toolkit';
import { MovieReduxInterface } from '../../../types/reducerTypes';
import { Response } from '../../../types/dataTypes';

export const setListOfOnTheAirTvs = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listOfOnTheAirTvs.listOfTvs = action.payload;
};
