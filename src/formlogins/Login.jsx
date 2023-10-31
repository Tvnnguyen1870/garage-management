import { Button, Form, Input, notification } from 'antd';
import '../assets/styles/login.css';

import loginAPI from '../services/UserService';
import { useNavigate } from 'react-router-dom';

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
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
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
        <div className="button">
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Login</Button>
          </Form.Item>
          <a style={{ float: 'center' }} href="http://localhost:5173/forgot">
            Forgot password
          </a>
        </div>
      </Form>
    </div>
  );
};
export default Login;
