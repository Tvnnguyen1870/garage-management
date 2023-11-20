import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Card, Row, Col, Space } from 'antd';

const { Option } = Select;
import axiosInstance from '../services/axios.service';

export default function NewOwner() {
  const navigator = useNavigate();
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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
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
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // values.preventDefault();

    // setOwners(values);
    console.log('Received values of form: ', values);
    navigator('/owner');

    try {
      if (id === 'create') {
        axiosInstance.post('users', values);
        return navigator('/owner');
      } else {
        axiosInstance.put('/users' + '/' + id, values);
        return navigator('/owner');
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(55, owners);

  return (
    <div className="profile">
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Card title="Infomation" bordered={false}>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Name:</div>
                <Input value={owners.fullName}></Input>
                <div className="detail-value">{ownerByIdData?.fullName}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Email:</div>
                <div className="detail-value">{ownerByIdData?.email}</div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Dob:</div>
                <div className="detail-value">{ownerByIdData?.dob}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Phone Number:</div>
                <div className="detail-value">{ownerByIdData?.phoneNumber}</div>
              </Col>
            </Row>

            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Gender:</div>
                <div className="detail-value">{ownerByIdData?.gender}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Role:</div>
                <div className="detail-value">{ownerByIdData?.role}</div>
              </Col>
            </Row>

            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Status:</div>
                <div className="detail-value">{ownerByIdData?.status}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Garages:</div>
                {/* {garagesId.garageArray.map((a, b) => {
                  return <div key={b}>{a.name}</div>;
                })} */}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Space style={{ marginTop: 20 }}>
        <Button type="primary" onClick={handleEdit}>
          Edit
        </Button>

        <Button type="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Space>
    </div>
  );
}
