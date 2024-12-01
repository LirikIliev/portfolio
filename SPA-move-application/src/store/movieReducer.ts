import { createSlice } from '@reduxjs/toolkit';

import { MovieReduxInterface } from '../types/reducerTypes';
import { initialState } from './config';
import { setPopularMovies } from './Slices/popularMoviesSlices/popularMoviesSlice';
import { setFullListOfMovies } from './Slices/fullListOfMoviesSlice/fullListOfMoviesSlice';
import { setGenresMovies } from './Slices/listOfPopularMoviesSlice/genresMoviesSlice';
import { extraReducerFullMovieList } from './extraReducers/extraReducerFullMoviesList';
import { extraReducerPopularMovies } from './extraReducers/extraReducerPopularMovies';
import { extraReducerGenresMovieList } from './extraReducers/extraReducersGenresMovieList';
import { setUpcomingMovies } from './Slices/upcomingMoviesSlice/upcomingMoviesSlice';
import { extraReducerUpcomingMovies } from './extraReducers/extraReducerUpcomingMovies';
import { setLanguage } from './Slices/setLanguage/setLanguage';
import { extraReducerNowPlayingMovies } from './extraReducers/extraReducerNowPlayingMoviesList';
import { setNowPlayingMovieSlice } from './Slices/nowPlayingMoviesSlice/nowPlayingMovieSlice';
import { setTopMoviesSlice } from './Slices/topMoviesSlice/topMoviesSlice';
import { extraReducerTopMovieList } from './extraReducers/extraReducerTopMovieList';
import { extraReducerFullListOfTvs } from './extraReducers/extraReducerFullListOfTvs';
import { setFullListOfTvs } from './Slices/fullListOfTvsSlice/fullListOfTvsSlice';
import { extraReducerListOfOnTheAirTvs } from './extraReducers/extraReducerListOfOnTheAirTvs';
import { setListOfOnTheAirTvs } from './Slices/onTheAirTvsSlice/fullListOfOnTheAir';
import { extraReducerAirTodayTvs } from './extraReducers/extraReducerOnAirTodayTvs';
import { setAirTodayTvs } from './Slices/airTodayTvsSlice/setAirTodayTvsSlice';
import { extraReducerPopularTvs } from './extraReducers/extraReducerPopularTvs';
import { setPopularTvs } from './Slices/popularTvsSlice/popularTvsSlice';
import { extraReducerListOfTopRatedTvs } from './extraReducers/extraReducerListOfTopRatedTvs';
import { setTopRatedTvs } from './Slices/topRatedTvs/TopRatedTvsSlice';

export const initialMovieState: MovieReduxInterface = initialState;

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setPopularMovies,
    setFullListOfMovies,
    setGenresMovies,
    setUpcomingMovies,
    setLanguage,
    setNowPlayingMovieSlice,
    setTopMoviesSlice,
    setFullListOfTvs,
    setListOfOnTheAirTvs,
    setAirTodayTvs,
    setPopularTvs,
    setTopRatedTvs,
  },
  extraReducers: (builder) => {
    extraReducerFullMovieList(builder);
    extraReducerPopularMovies(builder);
    extraReducerGenresMovieList(builder);
    extraReducerUpcomingMovies(builder);
    extraReducerNowPlayingMovies(builder);
    extraReducerTopMovieList(builder);
    extraReducerFullListOfTvs(builder);
    extraReducerListOfOnTheAirTvs(builder);
    extraReducerAirTodayTvs(builder);
    extraReducerPopularTvs(builder);
    extraReducerListOfTopRatedTvs(builder);
  },
});

export const {
  setPopularMovies: setPopularMoviesAction,
  setFullListOfMovies: setFullListOfMoviesAction,
  setGenresMovies: setGenresMoviesAction,
  setUpcomingMovies: setUpcomingMoviesAction,
  setLanguage: setLanguageAction,
  setNowPlayingMovieSlice: setNowPlayingMovieSliceAction,
  setTopMoviesSlice: setTopMoviesSliceAction,
  setFullListOfTvs: setFullListOfTvsAction,
  setListOfOnTheAirTvs: setListOfOnTheAirTvsAction,
  setAirTodayTvs: setAirTodayTvsAction,
  setPopularTvs: setPopularTvsAction,
  setTopRatedTvs: setTopRatedTvsAction,
} = movieSlice.actions;

export default movieSlice.reducer;
