import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import ListElement from '../../../../../widgets/ListElementWithNavLink/ListElement';
import DropDownM from '../Dropdown/Dropdown';
import { dropDownList } from '../../config';

import classes from './MainNavigation.module.scss';

const selectId = 'header-dropdown-navigation';
const MainNavigation: React.FC = () => {
  const navigate = useNavigate();
  const selectRef = useRef<HTMLSelectElement>(null);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      navigate(e.target.value);
      //! to catch selected option on base of url path.
    },
    [navigate]
  );

  return (
    <section className={classes.Main_navigation_wrapper}>
      <nav className={classes['Header-wrapper']}>
        <ul className={classes['Left-navigation']}>
          <ListElement linkTitle="Logo" redirectionPath="/" />
        </ul>
        <ul className={classes['Center-navigation']}>
          <p>to add search!</p>
        </ul>
        <ul className={classes['Right-navigation']}>
          <DropDownM
            id={selectId}
            name="header-dropdown-navigation"
            onChangeHandler={onChangeHandler}
            listOfOptions={dropDownList}
            ref={selectRef}
          />
        </ul>
      </nav>
      {/* <MovieFilter /> */}
    </section>
  );
};

export default MainNavigation;
