import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/styles.scss';
import RouterLayout from './components/RouterLayout/RouterLayout';
import RootRouteErrorHandling from './components/Errors/RootRouteErrorHandling';
import Movies from './components/Movies/Movies';
import About from './components/About/About';
import Home from './components/Home/Home';
import Tv from './components/Tv/Tv';

const routers = createBrowserRouter([
  {
    element: <RouterLayout />,
    errorElement: <RootRouteErrorHandling />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/movies',
        element: <Movies />,
        children: [],
      },
      {
        path: '/tv',
        element: <Tv />,
      },
      { path: '*', element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
