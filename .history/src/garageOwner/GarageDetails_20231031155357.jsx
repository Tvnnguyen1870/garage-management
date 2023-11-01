import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const GarageDetails = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/edit');
  };

  const handleDelete = () => {
    navigate('/owner');
  };

  return (
    <div>
      <div style={{ display: 'flex', marginBottom: '32px' }}>
        <h2>All garages </h2>
        <h2> > Add a new owner</h2>
      </div>
      <div className="profile">
        <div className="profile-one">
          <Row gutter={24}>
            <Col className="gutter-row" span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Name</span>
                      <p>Minh quang tran</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Email</span>
                      <p>minh.quang@gmail.com</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>DOB</span>
                      <p>20/12/1999</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Phone Number</span>
                      <p>0123456789</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Gender</span>
                      <p>Male</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Role</span>
                      <p>User</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Status</span>
                      <p>Status</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Garages</span>
                      <p>Garage ABC, TLS</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="buttonProfile">
          <Row gutter={24}>
            <Col className="gutter-row" span={4}>
              <div>
                <button className="btnUp" onClick={handleEdit}>
                  Edit
                </button>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div>
                {' '}
                <button className="btnChange" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default GarageDetails;
