import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';
import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';

export const getTopRatedTvs = createAsyncThunk(
  'topRatedTvs/getTopRatedTvs',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.list_of_top_rated_tvs(pageNumber));

    return request.data;
  }
);
