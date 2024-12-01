import React, { ReactElement, memo } from 'react';

import { Link } from 'react-router-dom';
import classes from './RightDataWrapper.module.scss';

interface RightWrapperInterface {
  title: string;
  buttonTitle: string;
  children: ReactElement;
}

const RightWrapper = ({
  children,
  title,
  buttonTitle,
}: RightWrapperInterface) => {
  return (
    <div className={classes.CoverProcessor_shortInformation_container}>
      <div className={classes.CoverProcessor_ShortInformation_title_wrapper}>
        <h3 className={classes.CoverProcessor_ShortInformation_title}>
          {title}
        </h3>
        <Link
          to="/movies"
          className={classes.CoverProcessor_ShortInformation_button}
        >
          {buttonTitle}
        </Link>
      </div>
      {React.cloneElement(children)}
    </div>
  );
};

const RightDataWrapper = memo(RightWrapper);
export default RightDataWrapper;
