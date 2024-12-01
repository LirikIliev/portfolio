import { NavLink } from 'react-router-dom';

import { ListElementInterface } from '../../types/header/headerTypes';
import { useClasser } from '../../hooks/useClasser';

import classes from './ListElement.module.scss';

const ListElement: React.FC<ListElementInterface> = ({
  linkTitle,
  redirectionPath,
}) => {
  const classer = useClasser();

  return (
    <li className={classes['Link-wrapper']}>
      <NavLink
        className={({ isActive }) =>
          classer({
            id: 'list-element-header',
            dependencies: [isActive],
            classes: [classes.Link, isActive && classes.ActiveLink],
          })
        }
        to={redirectionPath}
        title="Home Page"
      >
        {linkTitle}
      </NavLink>
    </li>
  );
};

export default ListElement;
