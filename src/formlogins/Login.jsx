import { Button, Form, Input, notification } from 'antd';
import '../assets/styles/login.css';

import { loginAPI } from '../services/UserService';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    let res = await loginAPI(values.email, values.password);

    localStorage.setItem('accessToken', res.accessToken);

    openNotification();

    navigate('/');
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const openNotification = () => {
    notification.open({
      message: 'LOGIN SUCCESS',
    });
  };
  return (
    <div className="loginContainer">
      <h1>welcome</h1>
      <h3>Login to your account</h3>
      <Form
        name="basic"
        style={{
          width: 400,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Link to="/forgot">forgot password</Link>
        <div className="button">
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Login;
