import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, GroupOutlined, UserOutlined, IdcardOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Content from './Content';
const { Header, Sider } = Layout;

const LayOut = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        width: '100%',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div
          style={{
            color: 'black',
            backgroundColor: 'white',
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
          theme="light"
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
        </Header>
        <Content />
      </Layout>
    </Layout>
  );
};
export default LayOut;
