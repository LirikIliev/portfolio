export interface LatitudeLongitudeInterface {
  latitude: number;
  longitude: number;
}

export type LocationInterface = string | LatitudeLongitudeInterface;

export interface useFetchForecastProgramAPIReturn {
  getProgramForecast: (location: LocationInterface) => Promise<void>;
}

export interface DailyInfoInterface {
  time: string;
  values: { [key: string]: number | string };
}
