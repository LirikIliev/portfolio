export type RequestQueryPageNumberType = number;

export interface GenresMoviesRequestInterface {
  pageNumber: RequestQueryPageNumberType;
  genresCode: number[];
}
