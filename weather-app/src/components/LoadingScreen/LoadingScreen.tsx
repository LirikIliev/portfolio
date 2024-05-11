import classes from './LoadingScreen.module.scss';

const LoadingScreen: React.FC = () => (
  <div className={classes['loading-screen']}>
    <div className={classes['loading-spinner']}></div>
  </div>
);

export default LoadingScreen;
