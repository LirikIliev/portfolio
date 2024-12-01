import { getFullListOfMovies } from '../store/Slices/fullListOfMoviesSlice/getFullListOfMovies';
import { getFullListOfTvs } from '../store/Slices/fullListOfTvsSlice/getFullListOfTvs';
import { getNowPlayingMovies } from '../store/Slices/nowPlayingMoviesSlice/getNowPlayingMovies';
import { getPopularMovies } from '../store/Slices/popularMoviesSlices/getPopularMovie';
import { getTopMoviesList } from '../store/Slices/topMoviesSlice/getTopMoviesList';
import { getUpcomingMovies } from '../store/Slices/upcomingMoviesSlice/getUpcomingMovies';

export const movieReducers = {
  allMovies: (pageNumber: number = 1) => getFullListOfMovies(pageNumber),
  popularMovies: (pageNumber: number = 1) => getPopularMovies(pageNumber),
  topMovies: (pageNumber: number = 1) => getTopMoviesList(pageNumber),
  nowPlayingMovies: (pageNumber: number = 1) => getNowPlayingMovies(pageNumber),
  upcomingMovies: (pageNumber: number = 1) => getUpcomingMovies(pageNumber),
  allTvs: (pageNumber: number = 1) => getFullListOfTvs(pageNumber),
};

export const tvsReducers = {};
