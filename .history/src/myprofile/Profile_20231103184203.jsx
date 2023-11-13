import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import { getProfile } from '../store/reducers/profile';
import '../assets/styles/profile.css';
>>>>>>> 80f7f3da9c1de96378edeb6e30d7568f34c8429e

const Profile = () => {
  const navigate = useNavigate();

  // truyền dữ liệu qua trang update profile và hiện dữ liệu vào các ô input
  const updateProfile = () => {
    navigate('/updateprofile');
  };

  // tới trang change password
  const changePass = () => {
    navigate('/changepassword');
  };

<<<<<<< HEAD
=======
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const { profile } = useSelector((state) => state.profile);
  console.log(profile);

  if (!profile) return;

>>>>>>> 80f7f3da9c1de96378edeb6e30d7568f34c8429e
  return (
    <div>
      <h1 className="headingProfile">My Profile</h1>
      <div className="profile">
        <div className="profile-one">
          <Row>
            <Col span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Name</span>
                      <p>nguyen</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Email</span>
                      <p>tvn@gmail.com</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Phone Number</span>
                      <p>0021040</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>DOB</span>
                      <p>17/12/2000</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={8}>
              <div>
                <Row>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Gender</span>
                      <p>Nam</p>
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="profile-grid">
                      <span>Role</span>
                      <p>Admin</p>
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
