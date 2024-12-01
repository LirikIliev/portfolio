import { memo } from 'react';

interface ButtonInterface {
  title: string;
  onClickEvent: () => void;
}

interface HeaderWrapperInterface {
  headerTitle: string;
  buttons?: ButtonInterface[];
}

import classes from './CoverProcessorWrapperHeader.module.scss';

const HeaderWrapper: React.FC<HeaderWrapperInterface> = ({
  headerTitle,
  buttons,
}) => (
  <div className={classes.Header_Wrapper}>
    <h3 className={classes.Header_Wrapper_title}>{headerTitle}</h3>
    {buttons && buttons.length > 0 ? (
      <div>
        {buttons.map((button: ButtonInterface, i) => (
          <button
            key={`${button.title}-${i}`}
            onClick={button.onClickEvent}
            className={classes.Header_button}
          >
            {button.title}
          </button>
        ))}
      </div>
    ) : null}
  </div>
);
const CoverProcessorWrapperHeader = memo(HeaderWrapper);
export default CoverProcessorWrapperHeader;
