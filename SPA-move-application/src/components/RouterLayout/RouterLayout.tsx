import { Outlet } from 'react-router-dom';

import MainNavigation from './Header/components/MainNavigation/MainNavigation';

import classes from './RouterLayout.module.scss';
import Footer from '../Footer/Footer';

const RouterLayout: React.FC = () => (
  <div className={classes.App_container}>
    <header>
      <MainNavigation />
    </header>
    <main className={classes.Main_container}>
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

//! Footer must stay here, but for that i must set css style to be always into the bottom

export default RouterLayout;
