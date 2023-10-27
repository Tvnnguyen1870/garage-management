import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/Layout';
import Login from './formlogins/Login';
import Forgot from './formlogins/ForgotPassword';
import Reset from './formlogins/ResetPassword';

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
    path: '/forgot',
    element: <Forgot />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },
]);

export default router;
