/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Button, Card, Col, Row, Space } from 'antd';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchServicesById } from '../store/reducers/service';
import { useDispatch, useSelector } from 'react-redux';

const DetailService = () => {
  const dispatch = useDispatch();
  const serviceByIdData = useSelector((state) => state.service?.serviceByIdData);
  const navigate = useNavigate();

  const params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(fetchServicesById(params.id));
  }, []);

  const handleEdit = () => {
    navigate(`/editowner/${params.id}`);
  };

  console.log(serviceByIdData);
  return (
    <div className="detail-container">
      <Row gutter={[16, 24]}>
        <Col span={24}>
          <Card title="Infomation" bordered={false}>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Name:</div>
                <div className="detail-value">{serviceByIdData?.name}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Description:</div>
                <div className="detail-value">{serviceByIdData?.description}</div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Max price:</div>
                <div className="detail-value">{serviceByIdData?.maxPrice}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Min price:</div>
                <div className="detail-value">{serviceByIdData?.minPrice}</div>
              </Col>
            </Row>
            {/* <Row gutter={[16, 24]}>
              <Col span={12}>
                <div className="detail-label">Gender:</div>
                <div className="detail-value">{serviceByIdData?.gender}</div>
              </Col>
              <Col span={12}>
                <div className="detail-label">Role:</div>
                <div className="detail-value">{serviceByIdData?.role}</div>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={24}>
                <div className="detail-label">Garage:</div>
                <Link to={serviceByIdData?.garage}>{serviceByIdData?.garage}</Link>
              </Col>
            </Row> */}
          </Card>
        </Col>
      </Row>
      <Space style={{ marginTop: 20 }}>
        <Button type="primary" onClick={handleEdit}>
          Edit
        </Button>

        <Button type="danger">Delete</Button>
      </Space>
    </div>
  );
};

export default DetailService;
