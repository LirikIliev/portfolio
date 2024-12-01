import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';

export const getPopularMovies = createAsyncThunk(
  'popularMovies/getPopularMovies',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.popular_movie_list(pageNumber));

    return request.data;
  }
);
