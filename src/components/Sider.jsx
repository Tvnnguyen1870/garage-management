import { UploadOutlined, UserOutlined, VideoCameraOutlined } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';

const Sider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Sider;
