import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';
import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';

export const getTopMoviesList = createAsyncThunk(
  'topMovies/getTopMoviesList',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.top_movies_list(pageNumber));

    return request.data;
  }
);
