import { Button, Col, Input, Row, Space } from 'antd';
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/changepassword.css';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

const ChangeProfile = () => {
  const navigate = useNavigate();

  // const [currentPassword, setCurrentPassword] = useState();
  // const [newPassword, setNewPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState();

  // hàm cancel quay lại trang profile
  const clickCancel = () => {
    navigate('/profile');
  };

  const { password } = useSelector((state) => state.password);

  console.log('password', password);

  const onInputChange = (event) => {
    const value = event.target.value;
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  // hàm savepassword : lưu trữ, thay đổi passsword và quay lại trang profile
  const savePassword = () => {
    setPasswordVisible(passwordVisible);

    // navigate('/profile');
  };

  return (
    <div>
      <h1 className="headingProfile">Change Password</h1>
      <div className="profilePassword">
        <h3 className="heading-changePassword">Now you can create a new password for your account</h3>
        <div>
          <Row gutter={24}>
            <Col className="gutter-row" span={24}>
              <Space direction="vertical">
                <span>Current Password</span>
                <Input.Password placeholder="enter current password" />
                <span>New Password</span>
                <Input.Password
                  onChange={onInputChange}
                  placeholder="enter new password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Space direction="vertical">
                  <span>Confirm Password</span>
                  <Input.Password
                    onChange={onInputChange}
                    placeholder="enter confirm password"
                    visibilityToggle={{
                      visible: passwordVisible,
                      onVisibleChange: setPasswordVisible,
                    }}
                  />
                </Space>
              </Space>
            </Col>

            <Col>
              <Button className="btn-changepassword-profile" onClick={savePassword}>
                Save
              </Button>
            </Col>
            <Col>
              <Button className="btn-changepassword-profile" onClick={clickCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
