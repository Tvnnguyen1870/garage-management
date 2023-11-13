import { Breadcrumb, Button, Col, Row } from 'antd';
import '../assets/styles/creategarage.css';
import '../assets/styles/managementdetail.css';
import { useNavigate } from 'react-router-dom';

const GarageManagementDetail = () => {
  const navigate = useNavigate();

  const clickEditManagement = () => {
    navigate('/managementedit');
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
        <Row className="row-manadetail">
          <Col span={8}>
            <div>
              <span className="name-span">Name</span>
              <p>Nguyen</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Email</span>
              <p>tvn@gmail.com</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Phone Number</span>
              <p>023503205</p>
            </div>
          </Col>
        </Row>
        <Row className="row-manadetail">
          <Col span={8}>
            <div>
              <span className="name-span">Address</span>
              <p>Ha Noi</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Open time</span>
              <p>9:00</p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Close time</span>
              <p>22:00</p>
            </div>
          </Col>
        </Row>
        <Row className="row-manadetail">
          <Col span={8}>
            <div>
              <span className="name-span">Services</span>
              <p>TLM</p>
            </div>
          </Col>
        </Row>
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
