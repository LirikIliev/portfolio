import { AxiosError } from 'axios';
import { Response } from './dataTypes';

export interface StructureSliceMovies {
  listOfMovies: Response;
  loading: boolean;
  error: AxiosError;
}

export interface StructureSliceTvs {
  listOfTvs: Response;
  loading: boolean;
  error: AxiosError;
}

export interface MovieReduxInterface {
  language: string;
  fullListOfMovies: StructureSliceMovies;
  listOfTopMovies: StructureSliceMovies;
  listOfMoviesByGenres: StructureSliceMovies;
  listOfUpcomingMovies: StructureSliceMovies;
  popularMoviesData: StructureSliceMovies;
  listOfNowPlayingMovies: StructureSliceMovies;
  listOfTvs: StructureSliceTvs;
  listOfAirTodaysTvs: StructureSliceTvs;
  listOfOnTheAirTvs: StructureSliceTvs;
  listPopularTvs: StructureSliceTvs;
  listOfTopRatedTvs: StructureSliceTvs;
}
