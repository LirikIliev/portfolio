import axios from 'axios';
import { authUrls } from '../../../helpers/requestsData';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GenresMoviesRequestInterface } from '../../../types/helpers/apiRequestTypes';

export const getGenresMovieList = createAsyncThunk(
  'genresMovies/getGenresMovieList',
  async ({ pageNumber, genresCode }: GenresMoviesRequestInterface) => {
    const request = await axios.get(
      authUrls.list_of_movies_by_genres({ pageNumber, genresCode })
    );

    return request.data;
  }
);
