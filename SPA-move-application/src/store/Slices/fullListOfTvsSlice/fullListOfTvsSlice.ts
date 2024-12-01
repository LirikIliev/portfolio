import { PayloadAction } from '@reduxjs/toolkit';

import { MovieReduxInterface } from '../../../types/reducerTypes';
import { Response } from '../../../types/dataTypes';

export const setFullListOfTvs = (
  state: MovieReduxInterface,
  action: PayloadAction<Response>
) => {
  state.listOfTvs.listOfTvs = action.payload;
};
