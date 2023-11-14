import { Breadcrumb, Button, Col, Row } from 'antd';
import '../assets/styles/editservice.css';

const DetailGarageService = () => {
  return (
    <div className="garage-service">
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
            title: 'Service 1',
          },
        ]}
      />
      <div className="service-edit">
        <Row className="row-editservice">
          <Col span={8}>
            <div>
              <span className="edit-service-span">Name</span>
              <p className="detail-p">sakjf</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="edit-service-span">Min price</span>
              <p className="detail-p">100</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="edit-service-span">Max Price</span>
              <p className="detail-p">1000</p>
            </div>
          </Col>
        </Row>
        <Row className="row-editservice">
          <Col span={24}>
            <div className="detail-description-service">
              <span>Description</span>
              <p className="detail-p"></p>
            </div>
          </Col>
        </Row>
        <Row className="row-editservice">
          <Col>
            <Button
              style={{
                marginRight: 20,
              }}
            >
              Edit
            </Button>
          </Col>
          <Col>
            <Button htmlType="submit" type="primary">
              Delete
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailGarageService;
