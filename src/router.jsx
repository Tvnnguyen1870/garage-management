import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Login from './formlogins/Login';
import Profile from './myprofile/Profile';
import LayoutLogin from './formlogins/LayoutLogin';
import UpdateProfile from './myprofile/UpdateProfile';
import ChangeProfile from './myprofile/ChangeProfile';
import GarageAll from './garageMangagement/GarageAll';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile />,
      },
      {
        path: '/changepassword',
        element: <ChangeProfile />,
      },
      {
        path: '/garageall',
        element: <GarageAll />,
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
