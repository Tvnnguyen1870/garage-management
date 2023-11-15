import { Breadcrumb, Button, Col, Form, Row } from 'antd';
import '../assets/styles/managementdetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchGarageById } from '../store/reducers/management';

const GarageManagementDetail = () => {
  const navigate = useNavigate();

  // call api
  const dispatch = useDispatch();
  const params = useParams();

  const { garageById } = useSelector((state) => state.management);
  console.log(garageById, 'garage');

  useEffect(() => {
    dispatch(fetchGarageById(params.id));
  }, [dispatch, params.id]);

  const [form] = Form.useForm();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const SubmitButton = ({ form }) => {
    const values = Form.useWatch([], form);
    React.useEffect(() => {}, [values, formSubmitted]);
  };

  const clickEditManagement = () => {
    navigate(`/managementedit/${params.id}`);
  };

  return (
    <div className="garage-create-management">
      <Breadcrumb
        style={{
          fontSize: 22,
        }}
        separator=">"
        items={[
          {
            title: 'All garages',
          },
          {
            title: 'Gara 1',
          },
        ]}
      />
      <div className="garage-create ">
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          initialValues={{
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
          <Row className="row-manadetail">
            <Col span={8}>
              <Form.Item name="name" label="Name">
                <div>Nguyen</div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="email" label="Email">
                <div>tvn@gmail.com</div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="phone" label="Phone Number">
                <div>Example</div>
              </Form.Item>
            </Col>
          </Row>
          <Row className="row-manadetail">
            <Col span={8}>
              <Form.Item name="address" label="Address">
                <div>Ha Noi</div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="open time" label="Open Time">
                <div>time</div>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="close Time" label="Close Time">
                <div>time</div>
              </Form.Item>
            </Col>
          </Row>
          <Row className="row-manadetail">
            <Col span={8}>
              <Form.Item name="status" label="Status">
                <div>status</div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <SubmitButton />
        <Row className="row-manadetail">
          <Col>
            <Button
              style={{
                marginRight: 20,
              }}
              onClick={clickEditManagement}
            >
              Edit
            </Button>
          </Col>
          <Col>
            <Button>Delete</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GarageManagementDetail;
