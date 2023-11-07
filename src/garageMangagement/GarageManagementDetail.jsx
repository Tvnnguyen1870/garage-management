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
              <p></p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Email</span>
              <p></p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Phone Number</span>
              <p></p>
            </div>
          </Col>
        </Row>
        <Row className="row-manadetail">
          <Col span={8}>
            <div>
              <span className="name-span">Address</span>
              <p></p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Open time</span>
              <p></p>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <span className="name-span">Close time</span>
              <p></p>
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
