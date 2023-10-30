import { createBrowserRouter } from 'react-router-dom';
import Login from '../src/formlogins/Login';
import { LayoutLogin } from '../src/formlogins/LayoutLogin';

const router = createBrowserRouter([
  {
    element: <LayoutLogin />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
