import { Button, Card, Col, Form, Input, Row, Select, Space, notification, Alert } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { createNewOwner } from '../store/reducers/owner';
// import { createNewOwner } from '../store/reducers/owner';
// import { AddfetchOwners, fetchOwners } from '../store/reducers/Owner';
const { Option } = Select;
const Create = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    // password: '',
    // phoneNumber: 0,
    // gender: 'Gender',
    // dob: '',
    // role: 'Role',
    // garage: [],
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  // const dateFormat = 'YYYY/MM/DD';

  useEffect(() => {
    form
      .validateFields()
      .then(() => {
        setIsFormValid(true);
        setShowAlert(false);
      })
      .catch(() => {
        setIsFormValid(false);
        setShowAlert(true);
      });
  }, [form]);

  const handleSubmit = () => {
    setIsSubmited(true);
    form
      .validateFields()
      .then((values) => {
        const formattedValues = {
          ...values,
        };

        dispatch(createNewOwner(formattedValues))
          .unwrap()
          .then((result) => {
            setShowAlert(false);
            setIsSubmited(false);

            setTimeout(() => {
              notification.success({
                message: 'Successfull',
                description: 'The service has been created successfully !',
                placement: 'topLeft',
              });
            }, 500);
          })
          .catch((error) => {
            console.error('Lỗi khi tạo dịch vụ', error);
            setShowAlert(true);
          });
      })
      .catch((error) => {
        setShowAlert(true);
        console.error('Lỗi khi xác thực biểu mẫu', error);
      });

    // navigate('/service');
  };

  const navigate = useNavigate();

  // const allGarages = ['Garage 1', 'Garage 2', 'Garage 3', 'Garage 4', 'Garage 5'];

  const clickCancel = () => {
    navigate('/owner');
  };

  // useEffect(() => {
  //   dispatch(AddfetchOwners(values));
  // }, [values]);

  return (
    <Card>
      <div
        className="profile"
        style={{
          marginTop: 32,
        }}
      >
        {showAlert && isSubmited && (
          <Alert
            message="Error"
            description="Please fill form."
            type="error"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
          />
        )}
        <div>
          <div>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <Form.Item name="fullName" label="Name" rules={[{ required: true }]}>
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
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
                    <Input />
                  </Form.Item>
                </Col>
                {/* <Col className="gutter-row" span={6}>
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
                </Col> */}

                {/* <Col className="gutter-row" span={6}>
                  <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input style={{ width: '100%' }} />
                  </Form.Item>
                </Col>

                <Col className="gutter-row" span={6}>
                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: 'Please select gender!' }]}
                  >
                    <Select placeholder="select your gender">
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </Col> */}
              </Row>
              <div>
                <Form.Item name="description" label="Description">
                  <Input.TextArea placeholder="Description" />
                </Form.Item>
              </div>
            </Form>

            <Space>
              <Button type="primary" htmlType="button" onClick={handleSubmit}>
                Create
              </Button>
              <Button onClick={clickCancel}>Cancel</Button>
            </Space>
          </div>
        </div>
      </div>
      {/* <div>
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
                <Select
                  className="select-content"
                  defaultValue="Gender"
                  style={{ width: '80%' }}
                  onChange={handleChange}
                >
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
                  format={dateFormat}
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
                  onChange={handleChange}
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
                  <Checkbox.Group>
                    {filteredGarages.map((garage) => (
                      <div key={garage}>
                        <Checkbox value={garage}>{garage}</Checkbox>
                      </div>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
        <SubmitButton form={form} />
        <Button>Cancel</Button>
      </div> */}
    </Card>
  );
};
export default Create;
