import { Breadcrumb, Button, Col, Row } from 'antd';
import creategarage from '../assets/styles/creategarage.css';

const GarageManagementDetail = () => {
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
        <Row>
          <Col span={8}>
            <span>Name</span>
            <p>Nguyen</p>
          </Col>
          <Col span={8}>
            <span>Email</span>
            <p>tvn@gmail.com</p>
          </Col>
          <Col span={8}>
            <span>Phone Number</span>
            <p>023503205</p>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <span>Address</span>
            <p>Ha Noi</p>
          </Col>
          <Col span={8}>
            <span>Open time</span>
            <p>9:00</p>
          </Col>
          <Col span={8}>
            <span>Close time</span>
            <p>22:00</p>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <span>Status</span>
            <p>Active</p>
          </Col>
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
