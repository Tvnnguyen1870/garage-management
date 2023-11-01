import { Controller, useForm } from 'react-hook-form';
import { Col, DatePicker, Radio, Row, Space } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const schema = yup.object().shape({
  userName: yup.string().required('name is valid'),
  email: yup.string().required('email is valid').email('email is invalid'),
  phoneNumber: yup.number().required('phone number is valid'),
});

const UpdateProfile = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      male: false,
      female: false,
      phoneNumber: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmitHandle = (values) => {
    console.log(values);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  // ấn cancel quay lại trang profile
  const onCancel = () => {
    navigate('/profile');
  };

  const [value, setValue] = useState(1);
  const onChangeInput = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <h1 className="headingProfile">My Profile</h1>
      <div className="profile">
        <Row gutter={24}>
          <div>
            <Col className="gutter-row" span={12}>
              <div className="profile-two">
                <form onSubmit={handleSubmit(onSubmitHandle)}>
                  <Row gutter={24}>
                    <Col className="gutter-row" span={12}>
                      <div className="input-updateProfile">
                        <span>Name</span>
                        <Controller
                          name="userName"
                          control={control}
                          render={({ field }) => {
                            return (
                              <div>
                                <input {...field} type="text" placeholder="enter your name" />
                                {errors['userName'] && <p>({errors.userName.message})</p>}
                              </div>
                            );
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col className="gutter-row" span={12}>
                      <div className="input-updateProfile">
                        <span>Email</span>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => {
                            return (
                              <div>
                                <input {...field} type="email" placeholder="enter your email" />
                                {errors['email'] && <p>({errors.email.message})</p>}
                              </div>
                            );
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col className="gutter-row" span={12}>
                      <div className="input-date">
                        <span>DOB</span>
                        <div>
                          <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                          </Space>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col className="gutter-row" span={12}>
                      <div className="input-gender">
                        <div>
                          <span>Gender</span>
                        </div>
                        <Radio.Group onChange={onChangeInput} value={value}>
                          <Space direction="vertical">
                            <Radio value={1}>Male</Radio>
                            <Radio value={2}>Female</Radio>
                          </Space>
                        </Radio.Group>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col className="gutter-row" span={12}>
                      <div className="input-updateProfile">
                        <span>Phone Number</span>
                        <Controller
                          name="phoneNumber"
                          control={control}
                          render={({ field }) => {
                            return (
                              <div>
                                <input {...field} type="tel" placeholder="enter your phone" />
                                {errors['phoneNumber'] && <p>({errors.phoneNumber.message})</p>}
                              </div>
                            );
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <div>
                      <Col className="gutter-row" span={24}>
                        <div className="buttonProfile">
                          {' '}
                          <button onClick={onsubmit}>Save</button>
                          <button className="btn-cancel" onClick={onCancel}>
                            Cancel
                          </button>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </form>
              </div>
            </Col>
          </div>
          <Col className="gutter-row" span={12}></Col>
        </Row>
      </div>
    </div>
  );
};

export default UpdateProfile;
