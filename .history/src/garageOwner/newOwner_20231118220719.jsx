import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Card } from 'antd';

const { Option } = Select;
import axiosInstance from '../services/axios.service';

export default function NewOwner() {
  const { id } = useParams();
  console.log(id);
  const [owners, setOwners] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    role: '',
    garage: '',
  });

  useEffect(() => {
    if (id === 'create') return;
    const fetchOwners = async () => {
      const response = await axiosInstance.get(`${'users'}/${id}`);
      console.log(response);
      setOwners(response.data.data);
    };
    fetchOwners();
  }, []);

  console.log(44, owners);

  // const [form] = Form.useForm();

  // const onFinish = (values) => {
  //   // values.preventDefault();

  //   console.log('Received values of form: ', values);
  // };
  // console.log(55, owners);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (id === 'create') {
  //       axiosInstance.post('users', owners);
  //       return navigator('/owner');
  //     } else {
  //       axiosInstance.put('users' + '/' + id, owners);
  //       return navigator('/owner');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <Card>
        <div>
          <form action="">
            <input type="text" value={owners.fullName} />
          </form>
          {/* <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >
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
              <Input defaultValue={owners.email} />
            </Form.Item>

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
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="fullName"
              label="Nickname"
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input defaultValue={owners.fullName} />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input style={{ width: '100%' }} defaultValue= {owners.phoneNumber} />
            </Form.Item>
            <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
              <Select placeholder="select your gender" defaultValue={owners.gender}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form> */}
        </div>
      </Card>
    </div>
  );
}
