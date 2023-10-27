import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Login from './formlogins/Login';
import UpdateProfile from './myprofile/UpdateProfile';
import Profile from './myprofile/Profile';
import ChangeProfile from './myprofile/ChangeProfile';
import LayoutLogin from './formlogins/LayoutLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
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
