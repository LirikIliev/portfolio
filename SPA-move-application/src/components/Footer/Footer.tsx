import { NavLink } from 'react-router-dom';

import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={classes.Footer_container}>
      <div className={classes.Grid_container}>
        <nav className={classes.Navigation_container}>
          <NavLink to={'/movies/:all-movies'} className={classes.Navigation}>
            A-z movies
          </NavLink>
          <NavLink to={'/movies/:new-movies'} className={classes.Navigation}>
            New movies
          </NavLink>
          <NavLink
            to={'/movies/:recently-added'}
            className={classes.Navigation}
          >
            Recently added
          </NavLink>
          <NavLink to={'/movies/:most-watched'} className={classes.Navigation}>
            Most watched
          </NavLink>
        </nav>
        <nav className={classes.Navigation_container}>
          <NavLink to={'/movies/:request'} className={classes.Navigation}>
            Contact
          </NavLink>
          <button className={classes.Request}>Request</button>
        </nav>
        <aside>
          <p>Discover Site_name, your gateway to free movie information!</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
