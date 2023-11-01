import { Button, Form, Input, Select, DatePicker, Row, Col, Card } from 'antd';
// import axiosInstance from '../services/axios.service';
const { Option } = Select;

//  const Api = axiosInstance.get("", {})
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const formItemLayout = { wrapperCol: { span: 14, offset: 4 } };

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Create = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Card>
      <div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          style={{
            maxWidth: '100%',
          }}
          scrollToFirstError
        >
          <Row gutter={24}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                name="fullname"
                label="Nickname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                  },
                ]}
              >
                <br />
                <Input style={{ right: '213px', marginTop: '20px' }} />
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <br />
                <Input style={{ right: '190px', marginTop: '20px' }} />
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <br />
                <Input.Password style={{ right: '210px', marginTop: '20px' }} />
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <br />
                <Input style={{ right: '190px', marginTop: '20px' }} />
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: 'Please select gender!',
                  },
                ]}
              >
                <br />
                <Select placeholder="select your gender" style={{ right: '200px', marginTop: '20px' }}>
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
              <Form.Item name="dob" label="DOB" {...config}>
                <br />
                <DatePicker style={{ right: '180px', marginTop: '20px' }} />
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
              <Form.Item
                name="role"
                label="Role"
                rules={[
                  {
                    required: true,
                    message: 'Please select gender!',
                  },
                ]}
              >
                <br />
                <Select placeholder="select your gender" style={{ right: '180px', marginTop: '20px' }}>
                  <Option value="male">User</Option>
                  <Option value="female">Admin</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
              <Form.Item
                name="garagIds"
                label="Garages"
                rules={[
                  {
                    required: true,
                    message: 'Please select gender!',
                  },
                ]}
              >
                {' '}
                <br />
                <Select
                  mode="multiple"
                  allowClear
                  style={{
                    right: '200px',
                    marginTop: '20px',
                  }}
                  placeholder="Please select"
                  onChange={handleChange}
                  options={options}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ background: ' var(--primary-1, #8767E1)' }}>
              Register
            </Button>

            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: 'white',
                color: '#8767E1',
                borderRadius: '8px',
                border: '1px solid var(--primary-1, #8767E1)',
              }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Card>
  );
};
export default Create;
