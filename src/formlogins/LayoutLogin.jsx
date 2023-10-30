import { Card } from 'antd';
import { Outlet } from 'react-router-dom';

const LayoutLogin = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card>
        input
        <div>
          <h1>1233333</h1>
        </div>
        <Outlet />
      </Card>
    </div>
  );
};

export default LayoutLogin;
