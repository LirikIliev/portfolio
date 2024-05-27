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
  ProgramDataInterface,
} from '../types/forecastTypes';
import {
  TEMPERATURE_TYPE,
  defaultDailyForecastValue,
  defaultProgramForecastValues,
} from '../helpers/config';
import { LatitudeLongitudeInterface } from '../types/hookTypes';

interface ForecastProgramContextInterface {
  programForecast: ProgramDataResponseInterface;
  setProgramForecast: Dispatch<SetStateAction<ProgramDataResponseInterface>>;
  dailyForecast: DailyDateResponseInterface;
  setDailyForecast: Dispatch<SetStateAction<DailyDateResponseInterface>>;
  programError: null | Error;
  setProgramError: Dispatch<SetStateAction<Error | null>>;
  dailyError: null | Error;
  setDailyError: Dispatch<SetStateAction<Error | null>>;
  programLoading: boolean;
  setProgramLoading: Dispatch<SetStateAction<boolean>>;
  dailyLoading: boolean;
  setDailyLoading: Dispatch<SetStateAction<boolean>>;
  locationName: string;
  setLocationName: Dispatch<SetStateAction<string>>;
  onTemperatureSignChange: () => void;
  typeOfTemperature: string;
  isSignCelsius: boolean;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  detailForecast: ProgramDataInterface | null;
  setDetailForecast: Dispatch<SetStateAction<ProgramDataInterface | null>>;
  userLocationInfo: LatitudeLongitudeInterface | null;
  setUserLocationInfo: Dispatch<
    SetStateAction<LatitudeLongitudeInterface | null>
  >;
  geoLocationError: string;
  setGeoLocationError: Dispatch<SetStateAction<string>>;
}

type ForecastProgramProviderProps = {
  children: ReactNode;
};

const defaultValues = {
  programForecast: defaultProgramForecastValues,
  setProgramForecast: () => {},
  programError: null,
  setProgramError: () => null,
  dailyError: null,
  setDailyError: () => null,
  programLoading: false,
  setProgramLoading: () => false,
  dailyLoading: false,
  setDailyLoading: () => false,
  locationName: '',
  setLocationName: () => null,
  onTemperatureSignChange: () => null,
  typeOfTemperature: TEMPERATURE_TYPE.celsius,
  isSignCelsius: true,
  dailyForecast: defaultDailyForecastValue,
  setDailyForecast: () => null,
  isModalOpen: false,
  setIsModalOpen: () => false,
  detailForecast: null,
  setDetailForecast: () => null,
  userLocationInfo: null,
  setUserLocationInfo: () => null,
  geoLocationError: '',
  setGeoLocationError: () => null,
} as ForecastProgramContextInterface;

export const ForecastContext = createContext(defaultValues);

export default function ForecastContextProvider({
  children,
}: ForecastProgramProviderProps) {
  const [programForecast, setProgramForecast] =
    useState<ProgramDataResponseInterface>(defaultProgramForecastValues);
  const [dailyForecast, setDailyForecast] =
    useState<DailyDateResponseInterface>(defaultProgramForecastValues);
  const [locationName, setLocationName] = useState<string>('');
  const [programError, setProgramError] = useState<null | Error>(null);
  const [dailyError, setDailyError] = useState<null | Error>(null);
  const [programLoading, setProgramLoading] = useState<boolean>(false);
  const [dailyLoading, setDailyLoading] = useState<boolean>(false);
  const [typeOfTemperature, setTypeOfTemperature] = useState<string>(
    TEMPERATURE_TYPE.celsius
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [detailForecast, setDetailForecast] =
    useState<ProgramDataInterface | null>(null);
  const [userLocationInfo, setUserLocationInfo] =
    useState<LatitudeLongitudeInterface | null>(null);
  const [geoLocationError, setGeoLocationError] = useState<string>('');

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
    onTemperatureSignChange,
    typeOfTemperature,
    isSignCelsius,
    dailyForecast,
    setDailyForecast,
    dailyError,
    setDailyError,
    isModalOpen,
    setIsModalOpen,
    detailForecast,
    setDetailForecast,
    userLocationInfo,
    setUserLocationInfo,
    geoLocationError,
    setGeoLocationError,
  };

  return (
    <ForecastContext.Provider value={value}>
      {children}
    </ForecastContext.Provider>
  );
}
