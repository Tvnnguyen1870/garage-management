import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Login from './formlogins/Login';
import ForgotPassword from './formlogins/ForgotPassword';
import ResetPassword from './formlogins/ResetPassword';
import Profile from './myprofile/Profile';
import LayoutLogin from './formlogins/LayoutLogin';
import UpdateProfile from './myprofile/UpdateProfile';
import GarageManagementAll from './garageMangagement/GarageManagementAll';
import CreateGarageManagement from './garageMangagement/CreateGarageManagement';
import EditManagement from './garageMangagement/EditManagement';
// import EditGarageService from './garageServices/EditGarageService';
import DetailGarageService from './garageServices/DetailGarageService';
import GarageManagementDetail from './garageMangagement/GarageManagementDetail';
import ChangePassword from './myprofile/ChangePassword';
import Service from './garageServices/Service';
import CreateService from './garageServices/CreateService';
import Owners from './garageOwner/Owner';
import Create from './garageOwner/create';

import Edit from './garageOwner/edit';
import GarageDetails from './garageOwner/detalis';
// import Edit from './garageOwner/edit';
// import GarageDetails from './garageOwner/detalis';

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
        element: <ChangePassword />,
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
      // {
      //   path: '/editservice',
      //   element: <EditGarageService />,
      // },
      {
        path: '/detailservice/:id',
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
        path: '/owner',
        element: <Owners />,
      },

      {
        path: '/detailowner/:id',
        element: <GarageDetails />,
      },
      {
        path: '/owner/create',
        element: <Create />,
      },
      // {
      //   path: '/owner/:editId',
      //   element: <Edit />,
      // },
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
]);

export default router;
