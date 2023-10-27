import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Login from './formlogins/Login';
import Create from './garageOwner/Create';
import Owner from './garageOwner/Owner';
import Edit from './garageOwner/Edit';

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
    element: <Create />,
  },
]);

export default router;
