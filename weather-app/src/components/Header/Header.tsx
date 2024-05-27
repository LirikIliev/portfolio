import { useContext } from 'react';

import { ForecastContext } from '../../context/ForecastContext';
import Icon from '../../icons/Icon';
import { TEMPERATURE_TYPE } from '../../helpers/config';

import classes from './Header.module.scss';
import { useMobileScreenDetection } from '../../hooks/useMobileScreenDetection';

const Header: React.FC = () => {
  const {
    locationName,
    onTemperatureSignChange,
    isSignCelsius,
    typeOfTemperature,
  } = useContext(ForecastContext);
  const { isMobile } = useMobileScreenDetection();

  return (
    <div className={classes['Wrapper']}>
      <div>
        <p className={classes['Header']}>Synoptic</p>
      </div>
      {locationName ? (
        <button
          className={classes['Temperature-sign-button']}
          onClick={onTemperatureSignChange}
        >
          <strong className={classes['Selected-temperature-sign']}>
            {typeOfTemperature}
          </strong>{' '}
          <p>|</p>
          <p>
            {isSignCelsius
              ? TEMPERATURE_TYPE.fahrenheit
              : TEMPERATURE_TYPE.celsius}
          </p>
        </button>
      ) : null}
      <ul className={classes['Ul-list']}>
        {locationName ? (
          <li className={classes['Location-wrapper']}>
            <Icon
              iconName={'Location'}
              size={isMobile ? 20 : 35}
              metrics="px"
            />
            <p className={classes['Text']}>{locationName}</p>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Header;
