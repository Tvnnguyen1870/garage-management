import { Card, Col, Row, Button } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { fetchOwners, fetchOwnersById } from '../store/reducers/owner';

const GarageDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ownerByIdData = useSelector((state) => state.owner?.ownerByIdData);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(fetchOwnersById(params.id));
  }, []);

  const handleEdit = () => {
    navigate(`/editowner/${params.id}`);
  };
  console.log(ownerByIdData);
  const handleDelete = () => {
    navigate('/owner');
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ display: 'flex', marginBottom: '32px' }}>
        <h2 style={{ color: 'var(--neutral-light-2, #939393)' }}>All garages </h2>
        <h2> > {ownerByIdData?.fullName}</h2>
      </div>
      <Card>
        <div>
          <div className="profile-one">
            <Row gutter={24}>
              <Col className="gutter-row" span={8}>
                <div>
                  <Row>
                    <Col span={24}>
                      <div className="profile-grid">
                        <span>Name</span>
                        <p>{ownerByIdData?.fullName}</p>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className="profile-grid">
                        <span>Email</span>
                        <p>{ownerByIdData?.email}</p>
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
                        <p>{ownerByIdData?.dob}</p>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className="profile-grid">
                        <span>Phone Number</span>
                        <p>{ownerByIdData?.phoneNumber}</p>
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
                        <p>{ownerByIdData?.gender}</p>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className="profile-grid">
                        <span>Role</span>
                        <p>{ownerByIdData?.role}</p>
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
                        <p>{ownerByIdData?.status}</p>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div className="profile-grid">
                        <span>Garages</span>
                        <p>{ownerByIdData?.garages}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="buttonProfile">
            <Row gutter={16}>
              <Col className="gutter-row" span={3}>
                <Button className="btnUp" onClick={handleEdit} style={{ marginLeft: '24px' }}>
                  Edit
                </Button>
              </Col>
              <Col className="gutter-row" span={2}>
                {' '}
                <Button className="btnChange" onClick={handleDelete}>
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GarageDetails;
