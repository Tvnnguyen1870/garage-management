import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, GroupOutlined, UserOutlined, IdcardOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { Header, Sider } = Layout;

const LayOut = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: 740,
        width: '100%',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div
          style={{
            color: 'white',
            backgroundColor: 'dark',
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 28,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          <p>Menu</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <IdcardOutlined />,
              label: 'Garage',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'User',
            },
            {
              key: '3',
              icon: <GroupOutlined />,
              label: 'Garage Services',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="dropdown">
            <img src="src/assets/witch-155291_640.webp" alt="" className="img" />
            <p className="nameAdmin">Admin</p>
            <div className="dropAdmin">
              <ul>
                <li>Profile</li>
                <li style={{ color: 'red' }}>Log Out</li>
              </ul>
            </div>
          </div>
        </Header>
        <Outlet style={{ padding: '30px' }} />
      </Layout>
    </Layout>
  );
};
export default LayOut;
