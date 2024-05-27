import {
  ClearDay,
  Cloudy,
  Drizzle,
  Flurries,
  Fog,
  FreezingDrizzle,
  FreezingRain,
  HeavyRain,
  HeavySnow,
  IcePellets,
  LightRain,
  LightSnow,
  Location,
  PartlyCloudyDay,
  Rain,
  Search,
  Snow,
  Thermometer,
  Thunderstorm,
  Unknown,
  PartlyCloudyNight,
  Sunrise,
  Sunset,
  Wind,
  UvIndex,
  Humidity,
} from './';

import classes from './Icon.module.scss';

interface IconWrapperInterface {
  iconName: string;
  size: number;
  metrics?: string;
  styles?: {};
}
interface IconMapInterface {
  [key: string]: JSX.Element;
}

const IconMap: IconMapInterface = {
  Thermometer: <Thermometer />,
  Search: <Search />,
  Unknown: <Unknown />,
  'Clear, Sunny': <ClearDay />,
  'Mostly Clear': <PartlyCloudyDay />,
  'Partly Cloudy': <PartlyCloudyDay />,
  'Mostly Cloudy': <PartlyCloudyDay />,
  Cloudy: <Cloudy />,
  Fog: <Fog />,
  'Light Fog': <Fog />,
  Drizzle: <Drizzle />,
  Rain: <Rain />,
  'Light Rain': <LightRain />,
  'Heavy Rain': <HeavyRain />,
  Snow: <Snow />,
  Flurries: <Flurries />,
  'Light Snow': <LightSnow />,
  'Heavy Snow': <HeavySnow />,
  'Freezing Drizzle': <FreezingDrizzle />,
  'Freezing Rain': <FreezingRain />,
  'Light Freezing Rain': <FreezingRain />,
  'Heavy Freezing Rain': <FreezingRain />,
  'Ice Pellets': <IcePellets />,
  'Heavy Ice Pellets': <IcePellets />,
  'Light Ice Pellets': <IcePellets />,
  Thunderstorm: <Thunderstorm />,
  Location: <Location />,
  'Partly Cloudy Night': <PartlyCloudyNight />,
  Sunrise: <Sunrise />,
  Sunset: <Sunset />,
  Wind: <Wind />,
  UvIndex: <UvIndex />,
  Humidity: <Humidity />,
};

const Icon: React.FC<IconWrapperInterface> = ({
  iconName,
  size,
  metrics,
  styles,
}) => {
  return (
    <div
      style={{
        width: `${size}${metrics ? metrics : '%'}`,
        height: `${size}${metrics ? metrics : '%'}`,
        ...styles,
      }}
      className={classes['Wrapper']}
    >
      {IconMap[iconName]}
    </div>
  );
};

export default Icon;
