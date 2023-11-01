import { Button, Col, Input, Row, Space } from 'antd';
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Changepassword from '../assets/styles/changepassword.css';

const ChangeProfile = () => {
  const navigate = useNavigate();

  // hàm cancel quay lại trang profile
  const ClickCancel = () => {
    navigate('/profile');
  };

  const [passwordVisible, setPasswordVisible] = React.useState(false);

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
                  placeholder="enter new password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <Space direction="vertical">
                  <span>Confirm Password</span>
                  <Input.Password
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
              <Button className="btn-changepassword-profile">Save</Button>
            </Col>
            <Col>
              <Button className="btn-changepassword-profile" onClick={ClickCancel}>
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
