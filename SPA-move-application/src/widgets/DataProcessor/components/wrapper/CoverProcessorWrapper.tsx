import React, { ReactElement, memo } from 'react';

import RightDataWrapper from './RightDataWrapper';
import classes from './CoverProcessorWrapper.module.scss';

interface CoverProcessorWrapperInterface {
  mainSectionChild: ReactElement;
  rightSectionChild: ReactElement;
  rightWrapperTitle: string;
  rightButtonTitle: string;
}

const CoverWrapper: React.FC<CoverProcessorWrapperInterface> = ({
  mainSectionChild,
  rightSectionChild,
  rightWrapperTitle,
  rightButtonTitle,
}) => (
  <div className={classes.CoverProcessor_template_container}>
    {React.cloneElement(mainSectionChild)}
    <RightDataWrapper title={rightWrapperTitle} buttonTitle={rightButtonTitle}>
      {React.cloneElement(rightSectionChild)}
    </RightDataWrapper>
  </div>
);

const CoverProcessorWrapper = memo(CoverWrapper);

export default CoverProcessorWrapper;
