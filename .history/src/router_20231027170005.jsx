import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/Layout';
import Login from './formlogins/Login';
import Create from './garageOwner/Create';
import Owner from './garageOwner/Owner';
import Edit from './garageOwner/Edit';
import App from './garageOwner/ad';
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
  {
    path: '/ad',
    element: <App />,
  },
]);

export default router;
