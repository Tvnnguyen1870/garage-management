import Sider from 'antd/es/layout/Sider';
import Header from './Header';
import Content from './Content';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <Sider />
        <Content />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
