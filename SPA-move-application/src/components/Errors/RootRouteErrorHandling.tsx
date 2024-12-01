import { useRouteError } from 'react-router-dom';

const RootRouteErrorHandling = () => {
  const error: unknown = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText}
      </p>
    </div>
  );
};

export default RootRouteErrorHandling;
