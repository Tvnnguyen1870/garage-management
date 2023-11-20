import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select, Space } from 'antd';

import axiosInstance from '../services/axios.service';
const { Option } = Select;
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
  return (
    <div>
      <div>
        <Card>
          <div>
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              initialValues={{
                id: '',
                name: '',
                email: '',
                password: '',
                phone: '',
                gender: 'Gender',
                dob: '',
                role: 'Role',
                garage: '',
              }}
            >
              <Row gutter={[16, 34]}>
                <Col className="gutter-row" span={5}>
                  <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input
                      style={{
                        width: '80%',
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={5}>
                  <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                    <Input
                      style={{
                        width: '80%',
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 34]}>
                <Col className="gutter-row" span={5}>
                  <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                    <Input
                      style={{
                        width: '80%',
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={5}>
                  <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                    <Input
                      style={{
                        width: '80%',
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={5}>
                  <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select className="select-content" defaultValue="Gender" style={{ width: '80%' }}>
                      <Select.Option value="Male">Male</Select.Option>
                      <Select.Option value="Female">Female</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={5}>
                  <Form.Item name="dob" label="DOB" rules={[{ required: true }]}>
                    <DatePicker
                      style={{
                        width: '80%',
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={5}>
                  <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                    <Select
                      className="select-content"
                      defaultValue="Role"
                      style={{
                        width: '80%',
                      }}
                    >
                      <Option value="User">User</Option>
                      <Option value="Admin">Admin</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={8}>
                  <Card>
                    <Form.Item name="garage" label="Garage">
                      <Input placeholder="Enter garage name" onChange={handleInputChange} value={filterValue} />
                    </Form.Item>
                  </Card>
                </Col>
              </Row>
            </Form>

            <Button>Cancel</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
