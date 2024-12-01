import HomePageMoviesWidgetTop from './component/HomePageMoviesWidgetTop';
import HomePageMoviesWidgetBottom from './component/HomePageMoviesWidgetBottom';

import classes from './Home.module.scss';

const Home: React.FC = () => (
  <div className={classes.Home_container}>
    <HomePageMoviesWidgetTop />
    <HomePageMoviesWidgetBottom title="Popular" />
  </div>
);

export default Home;
