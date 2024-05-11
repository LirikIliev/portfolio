import { useContext } from 'react';

import { ForecastContext } from '../../context/ForecastContext';
import Icon from '../../icons/Icon';
import { TEMPERATURE_TYPE } from '../../helpers/config';

import classes from './Header.module.scss';

const Header: React.FC = () => {
  const {
    locationPermission,
    locationName,
    onTemperatureSignChange,
    isSignCelsius,
    typeOfTemperature,
  } = useContext(ForecastContext);

  return (
    <nav className={classes['Wrapper']}>
      <div>
        <p className={classes['Header']}>Synoptic</p>
      </div>
      <ul className={classes['Ul-list']}>
        {locationPermission ? (
          <li className={classes['Location-wrapper']}>
            <Icon iconName={'Location'} size={35} metrics="px" />
            <p className={classes['Text']}>{locationName}</p>
          </li>
        ) : null}
      </ul>
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
    </nav>
  );
};

export default Header;
