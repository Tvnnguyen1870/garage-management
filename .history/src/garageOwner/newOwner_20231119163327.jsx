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

  return (
    <div className="profile">
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Card title="Infomation" bordered={false}>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Name:</div>
                <Input value={owners.fullName}></Input>
              </Col>
              <Col span={12}>
                <div className="detail-label">Email:</div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Dob:</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Phone Number:</div>
              </Col>
            </Row>

            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Gender:</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Role:</div>
              </Col>
            </Row>

            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Status:</div>
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
        <Button type="primary">Edit</Button>

        <Button type="danger">Delete</Button>
      </Space>
    </div>
  );
}
