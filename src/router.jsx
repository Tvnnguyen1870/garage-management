import Layout from 'antd/es/layout/layout';
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default router;
