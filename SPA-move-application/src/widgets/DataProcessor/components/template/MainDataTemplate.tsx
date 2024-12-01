import React, { memo } from 'react';

import { authUrls } from '../../../../helpers/requestsData';

import classes from './MainDataTemplate.module.scss';

interface TemplateInterface {
  poster_path?: string;
  title?: string;
  profile_path?: string;
  name?: string;
}

const Template: React.FC<TemplateInterface> = ({
  poster_path,
  title,
  name,
}) => (
  <div className={classes.Movie_cover_wrapper}>
    <div className={classes.Movie_poster_wrapper}>
      {poster_path ? (
        <img
          src={authUrls.movie_poster_url(poster_path)}
          alt="Poster of the movie"
          className={classes.Image}
        />
      ) : null}
    </div>
    {title || name ? <p className={classes.Title}>{title || name}</p> : null}
  </div>
);

const MainDataTemplate = memo(Template);
export default MainDataTemplate;
