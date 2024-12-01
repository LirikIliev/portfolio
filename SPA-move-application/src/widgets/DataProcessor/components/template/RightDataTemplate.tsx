import React, { memo } from 'react';
import { authUrls } from '../../../../helpers/requestsData';

interface RightDataTemplateInterface {
  poster_path?: string;
  title?: string;
  rating?: number;
}

import classes from './RightDataTemplate.module.scss';

const RightTemplate: React.FC<RightDataTemplateInterface> = ({
  poster_path,
  title,
  rating,
}) => (
  <div className={classes.Right_template_container}>
    <div>
      {poster_path ? (
        <img
          src={authUrls.movie_poster_url(poster_path)}
          alt="Poster of the movie"
          className={classes.Image}
        />
      ) : null}
    </div>
    <div className={classes.Text_wrapper}>
      {title ? <p className={classes.Text}>{title}</p> : null}
      {rating ? <p className={classes.Text}>{rating.toFixed(1)}</p> : null}
    </div>
  </div>
);

const RightDataTemplate = memo(RightTemplate);
export default RightDataTemplate;
