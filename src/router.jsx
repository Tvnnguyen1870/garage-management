import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Login from './formlogins/Login';
<<<<<<< HEAD
import UpdateProfile from './myprofile/UpdateProfile';
import Profile from './myprofile/Profile';
import ChangeProfile from './myprofile/ChangeProfile';
import LayoutLogin from './formlogins/LayoutLogin';
=======
>>>>>>> df9166d6c88e6e8d1ab7e6b79253b7ba372f0b8d

const router = createBrowserRouter([
  {
    path: '/layout',
    element: <LayOut />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
<<<<<<< HEAD
    path: '/',
    element: <LayoutLogin />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
=======
    path: '/login',
    element: <Login />,
>>>>>>> df9166d6c88e6e8d1ab7e6b79253b7ba372f0b8d
  },
]);

export default router;
