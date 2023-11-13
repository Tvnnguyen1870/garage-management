import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
// import Login from './formlogins/Login';
import Create from './garageOwner/Create';
import Edit from './garageOwner/Edit';
import Profile from './myprofile/Profile';
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
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/edit',
        element: <Edit />,
      },
    ],
  },
]);

export default router;
