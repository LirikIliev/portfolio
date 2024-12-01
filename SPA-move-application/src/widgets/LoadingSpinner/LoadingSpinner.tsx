import classes from './LoadingSpinner.module.scss';

const LoadingSpinner: React.FC = () => (
  <div className={classes['loading-screen']}>
    <div className={classes['loading-spinner']}></div>
  </div>
);

export default LoadingSpinner;
