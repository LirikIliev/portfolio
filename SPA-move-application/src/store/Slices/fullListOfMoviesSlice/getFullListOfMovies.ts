import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';

export const getFullListOfMovies = createAsyncThunk(
  'listOfMovies/getListOfMovies',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.list_of_movies(pageNumber));

    return request.data;
  }
);
