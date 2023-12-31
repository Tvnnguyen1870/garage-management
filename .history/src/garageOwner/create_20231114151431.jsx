import React from 'react';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { AddfetchOwners, fetchOwners } from '../store/reducers/Owner';
const { Option } = Select;
const Create = ({ value }) => {
  const [form] = Form.useForm();
  const dateFormat = 'YYYY/MM/DD';
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const allGarages = ['Garage 1', 'Garage 2', 'Garage 3', 'Garage 4', 'Garage 5'];
  const [filterValue, setFilterValue] = useState('');
  const filteredGarages = allGarages.filter((garage) => garage.includes(filterValue));

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const SubmitButton = ({ form }) => {
    const values = Form.useWatch([], form);
    React.useEffect(() => {}, [values, formSubmitted]);

    return (
      <Space>
        <Button type="primary" htmlType="button" onClick={handleSubmit}>
          Save
        </Button>
      </Space>
    );
  };
  const [values, setValues] = useState({
    email: '',
    password: '',
    fullName: '',
    phoneName: '',
    gender: '',
    role: '',
    dob: '',
    garageIds: [],
  });
  // const [owner, setOwner] = useState({});
  const handleSubmit = () => {
    setFormSubmitted(true);

    form
      .validateFields()
      .then((values) => {
        const payload = { ...values, id: uuidv4() };
        console.log(9, payload);
        setValues(payload);
      })
      .catch((error) => {
        console.error('Form validation error:', error);
      });
  };
  // useEffect(() => {
  //   dispatch(AddfetchOwners(values));
  // }, [values]);

  console.log(3, values);
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
  });

]

  // const { manageOwner } = useSelector((state) => state.owner);

  // useEffect(() => {
  //   dispatch(fetchOwners(params));
  // }, [params]);

  // useEffect(() => {
  //   dispatch(AddOwner(values));
  // }, [values]);

  // const data = manageOwner?.items;
  // console.log(4, data);

  // const pagination = manageOwner?.pagination;

  // if (!manageOwner) return;

  return (
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
      </div>
    </Card>
  );
};
export default Create;
