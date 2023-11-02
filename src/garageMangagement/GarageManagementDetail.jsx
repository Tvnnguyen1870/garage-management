import { Button, Col, Row } from 'antd';

const GarageManagementDetail = () => {
  return (
    <div>
      <span>All garage ? gara 1</span>
      <div>
        <Row>
          <Col span={8}>col</Col>
          <Col span={8}>col</Col>
          <Col span={8}>col</Col>
        </Row>
        <Row>
          <Col span={8}>col</Col>
          <Col span={8}>col</Col>
          <Col span={8}>col</Col>
        </Row>
        <Row>
          <Col span={8}>col</Col>
        </Row>
        <Row>
          <Col span={8}>col</Col>
        </Row>
        <Row>
          <Col>
            <Button>Edit</Button>
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
