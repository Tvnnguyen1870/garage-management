import Layout from 'antd/es/layout/layout';
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content';

const router = createBrowserRouter([
  {
    path: '/layout',
    element: <Layout />,
    children: [
      {
        path: '/header',
        element: <Header />,
      },
      {
        path: '/sider',
        element: <Sider />,
      },
      {
        path: '/content',
        element: <Content />,
      },
    ],
  },
]);

export default router;
