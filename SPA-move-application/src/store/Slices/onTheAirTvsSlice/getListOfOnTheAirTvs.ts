import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';
import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';

export const getListOfOnTheAirTvs = createAsyncThunk(
  'listOfOnTheAir/getListOfOnTheAirTvs',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.list_of_on_the_air(pageNumber));

    return request.data;
  }
);
