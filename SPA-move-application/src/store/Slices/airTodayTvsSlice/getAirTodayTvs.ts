import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestQueryPageNumberType } from '../../../types/helpers/apiRequestTypes';

export const getAirTodayTvs = createAsyncThunk(
  'airTodayTvs/getAirTodayTvs',
  async (pageNumber: RequestQueryPageNumberType) => {
    const request = await axios.get(authUrls.list_of_air_today_tvs(pageNumber));

    return request.data;
  }
);
