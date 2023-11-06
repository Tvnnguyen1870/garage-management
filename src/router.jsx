import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Login from './formlogins/Login';
import ForgotPassword from './formlogins/ForgotPassword';
import ResetPassword from './formlogins/ResetPassword';
import Profile from './myprofile/Profile';
import LayoutLogin from './formlogins/LayoutLogin';
import UpdateProfile from './myprofile/UpdateProfile';
import ChangeProfile from './myprofile/ChangeProfile';
import GarageDetail from './garageMangagement/GarageManagementDetail';
import GarageManagementAll from './garageMangagement/GarageManagementAll';
import CreateGarageManagement from './garageMangagement/CreateGarageManagement';
import EditManagement from './garageMangagement/EditManagement';
import EditGarageService from './garageServices/EditGarageService';
import DetailGarageService from './garageServices/DetailGarageService';

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
        element: <GarageDetail />,
      },
      {

        path: '/createservice',
        element: <CreateService />,
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
      {
        path: '/service',
        element: <Service />,
      },
    ],
  },
]);

export default router;
