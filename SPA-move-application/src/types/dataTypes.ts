export interface KnowForData {
  backdrop_path: string;
  id: number;
  original_name?: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  name?: string;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: [string];
}

export interface ResponseResultData {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnowForData[];
}

export interface Response {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: KnowForData[];
  total_pages: number;
  total_results: number;
}

export interface ListOfMoviesResponse {
  page: number;
  results: KnowForData[];
}
