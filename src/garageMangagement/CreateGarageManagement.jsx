import { Button, Col, Row } from 'antd';

const CreateGarageManagement = () => {
  return (
    <div>
      <span>All garage ? Add a new garage </span>
      <div>
        <Row>
          <Col span={8}>col</Col>
          <Col span={8}>col</Col>
          <Col span={8}>col</Col>
        </Row>
        <Row>
          <Col span={8}>col</Col>
        </Row>
        <Row>
          <Col span={12}>col</Col>
          <Col span={12}>col</Col>
        </Row>
        <Row>
          <Col>
            <Button>Save</Button>
          </Col>
          <Col>
            <Button>Cancel</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateGarageManagement;
