import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Login from './formlogins/Login';
import ForgotPassword from './formlogins/ForgotPassword';
import ResetPassword from './formlogins/ResetPassword';
import Profile from './myprofile/Profile';
import LayoutLogin from './formlogins/LayoutLogin';
import UpdateProfile from './myprofile/UpdateProfile';
import ChangeProfile from './myprofile/ChangeProfile';
import GarageManagementAll from './garageMangagement/GarageManagementAll';
import CreateGarageManagement from './garageMangagement/CreateGarageManagement';
import EditManagement from './garageMangagement/EditManagement';
import EditGarageService from './garageServices/EditGarageService';
import DetailGarageService from './garageServices/DetailGarageService';
import GarageManagementDetail from './garageMangagement/GarageManagementDetail';
import Service from './garageServices/Service';
import CreateService from './garageServices/CreateService';
import Owners from './garageOwner/Owner';

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
        path: '/managementall',
        element: <GarageManagementAll />,
      },
      {
        path: '/managementcreate',
        element: <CreateGarageManagement />,
      },
      {
        path: '/managementdetail',
        element: <GarageManagementDetail />,
      },
      {
        path: '/managementedit',
        element: <EditManagement />,
      },
      {
        path: '/editservice',
        element: <EditGarageService />,
      },
      {
        path: '/detailservice',
        element: <DetailGarageService />,
      },
      {
        path: '/service',
        element: <Service />,
      },
      {
        path: '/createservice',
        element: <CreateService />,
      },
      {
        path: '/owners',
        element: <Owners />,
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
      {
        path: '/forgot',
        element: <ForgotPassword />,
      },
      {
        path: '/reset',
        element: <ResetPassword />,
      },
    ],
  },
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
    ],
  },
]);

export default router;
