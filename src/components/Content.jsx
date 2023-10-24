import { theme } from 'antd';
const Content = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <div
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}  
      >
        Content
      </div>
    </div>
  );
};

export default Content;
