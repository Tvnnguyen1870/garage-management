import { Button, theme } from "antd";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';

const Header = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <div>
        <div
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
        </div>
    </div>
  )
};

export default Header;
