export interface Error {
  code: number;
  type: string;
  message: string;
}

export interface Values {
  sunriseTime?: string;
  sunsetTime?: string;
  moonriseTime?: string;
  moonsetTime?: string;
  windSpeedAvg?: number;
  pressureSurfaceLevelAvg?: number;
  precipitationProbabilityAvg?: number;
}

export interface DailyDataInterface {
  time: string;
  values: {
    cloudBase: number;
    cloudCeiling: number;
    cloudCover: number;
    dewPoint: number;
    evapotranspiration: number;
    freezingRainIntensity: number;
    humidity: number;
    iceAccumulation: number;
    iceAccumulationLwe: number;
    precipitationProbability: number;
    pressureSurfaceLevel: number;
    rainAccumulation: number;
    rainAccumulationLwe: number;
    rainIntensity: number;
    sleetAccumulation: number;
    sleetAccumulationLwe: number;
    sleetIntensity: number;
    snowAccumulation: number;
    snowAccumulationLwe: number;
    snowIntensity: number;
    temperature: number;
    temperatureApparent: number;
    uvHealthConcern: number;
    uvIndex: number;
    visibility: number;
    weatherCode: number;
    windDirection: number;
    windGust: number;
    windSpeed: number;
    temperatureSign: string;
    temperatureColor: string;
    temperatureFahrenheit: number;
  };
}

export interface ProgramDataInterface {
  time: string;
  values: {
    cloudBaseAvg: number;
    cloudBaseMax: number;
    cloudBaseMin: number;
    cloudCeilingAvg: number;
    cloudCeilingMax: number;
    cloudCeilingMin: number;
    cloudCoverAvg: number;
    cloudCoverMax: number;
    cloudCoverMin: number;
    dewPointAvg: number;
    dewPointMax: number;
    dewPointMin: number;
    evapotranspirationAvg: number;
    evapotranspirationMax: number;
    evapotranspirationMin: number;
    evapotranspirationSum: number;
    freezingRainIntensityAvg: number;
    freezingRainIntensityMax: number;
    freezingRainIntensityMin: number;
    humidityAvg: number;
    humidityMax: number;
    humidityMin: number;
    iceAccumulationAvg: number;
    iceAccumulationLweAvg: number;
    iceAccumulationLweMax: number;
    iceAccumulationLweMin: number;
    iceAccumulationLweSum: number;
    iceAccumulationMax: number;
    iceAccumulationMin: number;
    iceAccumulationSum: number;
    moonriseTime: string;
    moonsetTime: string;
    temperatureColor: string;
    temperatureSign: string;
    precipitationProbabilityAvg: number;
    precipitationProbabilityMax: number;
    precipitationProbabilityMin: number;
    pressureSurfaceLevelAvg: number;
    pressureSurfaceLevelMax: number;
    pressureSurfaceLevelMin: number;
    rainAccumulationAvg: number;
    rainAccumulationLweAvg: number;
    rainAccumulationLweMax: number;
    rainAccumulationLweMin: number;
    rainAccumulationMax: number;
    rainAccumulationMin: number;
    rainAccumulationSum: number;
    rainIntensityAvg: number;
    rainIntensityMax: number;
    rainIntensityMin: number;
    sleetAccumulationAvg: number;
    sleetAccumulationLweAvg: number;
    sleetAccumulationLweMax: number;
    sleetAccumulationLweMin: number;
    sleetAccumulationLweSum: number;
    sleetAccumulationMax: number;
    sleetAccumulationMin: number;
    sleetIntensityAvg: number;
    sleetIntensityMax: number;
    sleetIntensityMin: number;
    snowAccumulationAvg: number;
    snowAccumulationLweAvg: number;
    snowAccumulationLweMax: number;
    snowAccumulationLweMin: number;
    snowAccumulationLweSum: number;
    snowAccumulationMax: number;
    snowAccumulationMin: number;
    snowAccumulationSum: number;
    snowIntensityAvg: number;
    snowIntensityMax: number;
    snowIntensityMin: number;
    sunriseTime: string;
    sunsetTime: string;
    temperatureApparentAvg: number;
    temperatureApparentMax: number;
    temperatureApparentMin: number;
    temperatureAvg: number;
    temperatureMax: number;
    temperatureMaxFahrenheit: number | string;
    temperatureMin: number;
    temperatureMinFahrenheit: number | string;
    temperatureAvgFahrenheit: number | string;
    uvHealthConcernAvg: number;
    uvHealthConcernMax: number;
    uvHealthConcernMin: number;
    uvIndexAvg: number;
    uvIndexMax: number;
    uvIndexMin: number;
    visibilityAvg: number;
    visibilityMax: number;
    visibilityMin: number;
    weatherCodeMax: number;
    weatherCodeMin: number;
    windDirectionAvg: number;
    windGustAvg: number;
    windGustMax: number;
    windGustMin: number;
    windSpeedAvg: number;
    windSpeedMax: number;
    windSpeedMin: number;
  };
}

export interface ProgramDataResponseInterface {
  timelines: {
    minutely?: ProgramDataInterface[];
    hourly: ProgramDataInterface[];
    daily: ProgramDataInterface[];
  };
  location: {
    lat: number;
    lon: number;
    name: string;
    type: string;
  };
}

export interface DailyDateResponseInterface {
  location: {
    lat: number;
    lon: number;
    name: string;
    type: string;
  };
  timelines: {
    hourly: DailyDataInterface[];
    daily: DailyDataInterface[];
  };
}
