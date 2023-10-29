import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { EyeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  currentPassword: yup.string().required('name is valid'),
  newPassword: yup.string().required('name is valid'),
  confirmPassword: yup.string().required('name is valid'),
});

const ChangeProfile = () => {
  const navigate = useNavigate();

  // hàm cancel quay lại trang profile
  const ClickCancel = () => {
    navigate('/profile');
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  // show password
  const ClickShowPassword = () => {
    console.log('lol');
  };

  return (
    <div>
      <h1 className="headingProfile">Change Password</h1>
      <div className="profilePassword">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="heading-changePassword">Now you can create a new password for your account</h3>
          <div>
            <Row gutter={24}>
              <Col className="gutter-row" span={24}>
                <div className="input-changePassword">
                  <span>Current Password</span>
                  <Controller
                    name="currentPassword"
                    control={control}
                    render={({ field }) => {
                      return (
                        <div>
                          <input {...field} type="password" placeholder="enter your password" />
                          {errors['currentPassword'] && <p>({errors.currentPassword.message})</p>}
                        </div>
                      );
                    }}
                  />
                </div>
              </Col>
              <Col className="gutter-row" span={24}>
                <div className="input-changePassword">
                  <span>New Password</span>
                  <Controller
                    name="newPassword"
                    control={control}
                    render={({ field }) => {
                      return (
                        <div>
                          <input
                            {...field}
                            type="password"
                            className="password-eye"
                            placeholder="enter your new password"
                          />{' '}
                          <EyeOutlined
                            onClick={ClickShowPassword}
                            style={{
                              cursor: 'pointer',
                            }}
                          />
                          {errors['newPassword'] && <p>({errors.newPassword.message})</p>}
                        </div>
                      );
                    }}
                  />
                </div>
              </Col>
              <Col className="gutter-row" span={24}>
                <div className="input-changePassword">
                  <span>Confirm Password</span>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => {
                      return (
                        <div>
                          <input
                            {...field}
                            type="password"
                            className="password-eye"
                            placeholder="enter confirm password"
                          />{' '}
                          <EyeOutlined
                            onClick={ClickShowPassword}
                            style={{
                              cursor: 'pointer',
                            }}
                          />
                          {errors['confirmPassword'] && <p>({errors.confirmPassword.message})</p>}
                        </div>
                      );
                    }}
                  />
                </div>
              </Col>
              <Col className="gutter-row" span={24}>
                <div className="buttonChangePassword">
                  <button className="btnUp" type="Submit">
                    Save
                  </button>
                  <button onClick={ClickCancel}>Cancel</button>
                </div>
              </Col>
            </Row>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeProfile;
