import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const updateProfile = () => {
    navigate('/updateprofile');
  };

  const changePass = () => {
    navigate('/changepassword');
  };

  return (
    <div>
      <h1 className="headingProfile">My Profile</h1>
      <div className="profile">
        <div className="profile-one">
          <Row gutter={24}>
            <Col className="gutter-row" span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Name</span>
                      <p></p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Email</span>
                      <p className="api-return">{}</p>
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
                      <span>Phone Number</span>
                      <p className="api-return"></p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>DOB</span>
                      <p className="api-return"></p>
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
                      <p className="api-return"></p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Role</span>
                      <p className="api-return"></p>
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
                <button className="btnUp" onClick={updateProfile}>
                  Update Profile
                </button>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div>
                {' '}
                <button className="btnChange" onClick={changePass}>
                  Change Password
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;
