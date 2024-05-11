import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import {
  ProgramDataResponseInterface,
  Error,
  DailyDateResponseInterface,
} from '../types/forecastTypes';
import { TEMPERATURE_TYPE } from '../helpers/config';

interface ForecastProgramContextInterface {
  programForecast: ProgramDataResponseInterface;
  setProgramForecast: Dispatch<SetStateAction<ProgramDataResponseInterface>>;
  dailyForecast: DailyDateResponseInterface;
  setDailyForecast: Dispatch<SetStateAction<DailyDateResponseInterface>>;
  programError: Error;
  setProgramError: Dispatch<SetStateAction<Error>>;
  dailyError: Error;
  setDailyError: Dispatch<SetStateAction<Error>>;
  programLoading: boolean;
  setProgramLoading: Dispatch<SetStateAction<boolean>>;
  dailyLoading: boolean;
  setDailyLoading: Dispatch<SetStateAction<boolean>>;
  locationName: string;
  setLocationName: Dispatch<SetStateAction<string>>;
  locationPermission: boolean;
  setLocationPermission: Dispatch<SetStateAction<boolean>>;
  onTemperatureSignChange: () => void;
  typeOfTemperature: string;
  isSignCelsius: boolean;
}

type ForecastProgramProviderProps = {
  children: ReactNode;
};

const defaultValues = {
  programForecast: {
    location: { lat: 0, lon: 0, name: '', type: '' },
    timelines: { daily: [], hourly: [], minutely: [] },
  },
  setProgramForecast: () => {},
  programError: { code: 0, type: '', message: '' },
  setProgramError: () => {},
  dailyError: { code: 0, type: '', message: '' },
  setDailyError: () => null,
  programLoading: false,
  setProgramLoading: () => false,
  dailyLoading: false,
  setDailyLoading: () => false,
  locationName: '',
  setLocationName: () => null,
  locationPermission: false,
  setLocationPermission: () => null,
  onTemperatureSignChange: () => null,
  typeOfTemperature: TEMPERATURE_TYPE.celsius,
  isSignCelsius: true,
  dailyForecast: {
    location: { lat: 0, lon: 0, name: '', type: '' },
    timelines: { hourly: [], daily: [] },
  },
  setDailyForecast: () => null,
} as ForecastProgramContextInterface;

export const ForecastContext = createContext(defaultValues);

export default function ForecastContextProvider({
  children,
}: ForecastProgramProviderProps) {
  const [programForecast, setProgramForecast] =
    useState<ProgramDataResponseInterface>({
      location: { lat: 0, lon: 0, name: '', type: '' },
      timelines: { daily: [], hourly: [], minutely: [] },
    });
  const [dailyForecast, setDailyForecast] =
    useState<DailyDateResponseInterface>({
      location: { lat: 0, lon: 0, name: '', type: '' },
      timelines: { hourly: [], daily: [] },
    });
  const [locationName, setLocationName] = useState<string>(
    'The location of your device!'
  );
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [programError, setProgramError] = useState<Error>({
    code: 0,
    type: '',
    message: '',
  });
  const [dailyError, setDailyError] = useState<Error>({
    code: 0,
    type: '',
    message: '',
  });
  const [programLoading, setProgramLoading] = useState<boolean>(false);
  const [dailyLoading, setDailyLoading] = useState<boolean>(false);
  const [typeOfTemperature, setTypeOfTemperature] = useState<string>(
    TEMPERATURE_TYPE.celsius
  );

  const isSignCelsius = typeOfTemperature === TEMPERATURE_TYPE.celsius;

  const onTemperatureSignChange = useCallback(() => {
    isSignCelsius
      ? setTypeOfTemperature(TEMPERATURE_TYPE.fahrenheit)
      : setTypeOfTemperature(TEMPERATURE_TYPE.celsius);
  }, [isSignCelsius]);

  const value = {
    programForecast,
    setProgramForecast,
    programError,
    setProgramError,
    programLoading,
    setProgramLoading,
    dailyLoading,
    setDailyLoading,
    locationName,
    setLocationName,
    locationPermission,
    setLocationPermission,
    onTemperatureSignChange,
    typeOfTemperature,
    isSignCelsius,
    dailyForecast,
    setDailyForecast,
    dailyError,
    setDailyError,
  };

  return (
    <ForecastContext.Provider value={value}>
      {children}
    </ForecastContext.Provider>
  );
}
