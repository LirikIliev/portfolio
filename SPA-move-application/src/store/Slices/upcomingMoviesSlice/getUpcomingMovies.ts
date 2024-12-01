import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { requestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';
import { authUrls } from '../../../helpers/requestsData';

export const getUpcomingMovies = createAsyncThunk(
  'upcomingMovies/getUpcomingMovies',
  async (pageNumber: requestQueryPageNumberType) => {
    const request = await axios.get(authUrls.upcoming_movie_list(pageNumber));

    return request.data;
  }
);
