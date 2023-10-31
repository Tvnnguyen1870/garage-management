import { Button, Form, Input } from 'antd';
import '../assets/styles/login.css';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Reset = () => (
  <div className="loginContainer">
    <h3>Reset password</h3>
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="horizontal"
    >
      <Form.Item
        label="Password"
        name="Password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Re-Password"
        name="repassword"
        rules={[
          {
            required: true,
            message: 'Please input your Re-password!',
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
          <Button htmlType="submit" href="http://localhost:5173/login">
            Reset
          </Button>
        </Form.Item>
      </div>
    </Form>
  </div>
);
export default Reset;
