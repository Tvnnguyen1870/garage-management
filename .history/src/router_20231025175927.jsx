import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/Layout';
import Login from './formlogins/Login';
import GarageCreate from './garageOwner/GarageCreate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/garage',
    element: <GarageCreate />,
  },
]);

export default router;
