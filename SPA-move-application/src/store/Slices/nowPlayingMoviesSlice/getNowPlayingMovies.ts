import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';
import { authUrls } from '../../../helpers/requestsData';

export const getNowPlayingMovies = createAsyncThunk(
  'nowPlayingMovies/getNowPlayingMovies',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(
      authUrls.now_playing_movie_list(pageNumber)
    );

    return request.data;
  }
);
