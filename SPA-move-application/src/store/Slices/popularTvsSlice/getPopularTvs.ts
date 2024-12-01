import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';
import { authUrls } from '../../../helpers/requestsData';

export const getPopularTvs = createAsyncThunk(
  'popularTvsList/getPopularTvsList',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.list_of_popular_tvs(pageNumber));

    return request.data;
  }
);
