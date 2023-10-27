import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/Layout';
import Login from './formlogins/Login';
import Create from './garageOwner/Create';
import Owner from './garageOwner/Owner';
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
    element: <Owner />,
  },
]);

export default router;
