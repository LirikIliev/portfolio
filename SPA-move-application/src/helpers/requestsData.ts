import { RequestQueryPageNumberType } from '../types/helpers/apiRequestTypes';

interface autUrlsInterface {
  pageNumber: RequestQueryPageNumberType;
  genresCode: number[];
}

const TMDBurl = 'https://api.themoviedb.org/3';
const options = {
  api_key: 'eb777ef7375a9fbc8abed593a1d6229b',
  page: (pageNumber: number) => `page=${pageNumber}`,
  language: 'language=en-US',
  data_type: 'application/json',
  access_token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjc3N2VmNzM3NWE5ZmJjOGFiZWQ1OTNhMWQ2MjI5YiIsInN1YiI6IjY2NTlkOWY2YmNlMmFjOTY4OTUwOTQwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pD0RzWrvUPVxnTsBy-F4eiUMjVaiAgBUIhI3FV1jx7M',
};

const genresList = {
  movie_genres: `${TMDBurl}/genre/movie`,
  tv_genres: `${TMDBurl}/genre/tv`,
};

const tvsUrls = {
  all_tvs: `${TMDBurl}/trending/tv/day`,
  air_todays: `${TMDBurl}/tv/airing_today`,
  on_the_air: `${TMDBurl}/tv/on_the_air`,
  popular: `${TMDBurl}/tv/popular`,
  top_rated: `${TMDBurl}/tv/top_rated`,
};

const movieUrls = {
  movie_list: `${TMDBurl}/discover/movie`,
  popular_movies: `${TMDBurl}/movie/popular`,
  top_movies: `${TMDBurl}/movie/top_rated`,
  poster_movie: 'http://image.tmdb.org/t/p/w500',
  upcoming_movies: `${TMDBurl}/movie/upcoming`,
  now_playing: `${TMDBurl}/movie/now_playing`,
};

const genresQueryParams = `?api_key=${options.api_key}&${options.language}&accept=${options.data_type}`;
const queryParams = (pageNumber: RequestQueryPageNumberType) =>
  `?api_key=${options.api_key}&${options.language}&${options.page(
    pageNumber
  )}&accept=${options.data_type}`;

export const authUrls = {
  list_of_movies: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${movieUrls.movie_list}${queryParams(pageNumber)}`,
  popular_movie_list: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${movieUrls.popular_movies}${queryParams(pageNumber)}`,
  upcoming_movie_list: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${movieUrls.upcoming_movies}${queryParams(pageNumber)}`,
  now_playing_movie_list: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${movieUrls.now_playing}${queryParams(pageNumber)}`,
  movie_poster_url: (path: string) => `http://image.tmdb.org/t/p/w500${path}`,
  top_movies_list: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${movieUrls.top_movies}${queryParams(pageNumber)}`,
  list_of_movie_genres: () => `${genresList.movie_genres}${genresQueryParams}`,
  list_of_movies_by_genres: ({ pageNumber, genresCode }: autUrlsInterface) =>
    `${movieUrls.movie_list}${queryParams(
      pageNumber
    )}&with_genres=${genresCode.join(',')}`,
  list_of_tvs: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${tvsUrls.all_tvs}${queryParams(pageNumber)}`,
  list_of_air_today_tvs: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${tvsUrls.air_todays}${queryParams(pageNumber)}`,
  list_of_on_the_air: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${tvsUrls.on_the_air}${queryParams(pageNumber)}`,
  list_of_popular_tvs: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${tvsUrls.popular}${queryParams(pageNumber)}`,
  list_of_top_rated_tvs: (pageNumber: RequestQueryPageNumberType = 1) =>
    `${tvsUrls.top_rated}${queryParams(pageNumber)}`,
  list_of_tvs_genres: () => `${genresList.tv_genres}${genresQueryParams}`,
};
