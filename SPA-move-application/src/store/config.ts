import { MovieReduxInterface } from '../types/reducerTypes';

export const initialMovieData = {
  page: 1,
  results: [
    {
      adult: false,
      gender: 1,
      id: 0,
      known_for_department: '',
      name: '',
      original_name: '',
      popularity: 0,
      profile_path: '',
      known_for: [
        {
          backdrop_path: '',
          id: 0,
          original_name: '',
          original_title: '',
          overview: '',
          poster_path: '',
          media_type: '',
          adult: false,
          name: '',
          title: '',
          original_language: '',
          genre_ids: [0],
          popularity: 0,
          first_air_date: '',
          release_date: '',
          video: false,
          vote_average: 0,
          vote_count: 0,
          origin_country: [''],
        },
      ],
    },
  ],
};

const defaultMovieDataStructure = {
  listOfMovies: initialMovieData,
  error: {},
  loading: false,
};

const defaultTvsDataStructure = {
  listOfTvs: initialMovieData,
  error: {},
  loading: false,
};

export const initialState = {
  language: 'bg',
  fullListOfMovies: defaultMovieDataStructure,
  popularMoviesData: defaultMovieDataStructure,
  listOfTopMovies: defaultMovieDataStructure,
  listOfMoviesByGenres: defaultMovieDataStructure,
  listOfNowPlayingMovies: defaultMovieDataStructure,
  listOfUpcomingMovies: defaultMovieDataStructure,
  listOfTvs: defaultTvsDataStructure,
  listOfAirTodaysTvs: defaultTvsDataStructure,
  listOfOnTheAirTvs: defaultTvsDataStructure,
  listPopularTvs: defaultTvsDataStructure,
  listOfTopRatedTvs: defaultTvsDataStructure,
} as unknown as MovieReduxInterface;
