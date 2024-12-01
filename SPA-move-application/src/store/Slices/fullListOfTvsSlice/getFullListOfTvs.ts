import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';
import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';

export const getFullListOfTvs = createAsyncThunk(
  'listOfTvs/getListOfTvs',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.list_of_tvs(pageNumber));

    return request.data;
  }
);
