import { Controller, useForm } from 'react-hook-form';
import { Button, Col, DatePicker, Row, Space } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import updateprofile from '../assets/styles/updateprofile.css';
import { addProfile, editProfile, getProfile } from '../store/reducers/profile';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
    reset,
  } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      phoneNumber: '',
      male: false,
      female: false,
    },
    resolver: yupResolver(schema),
  });

  //  hàm save profile: lưu trữ dữ liệu nhập từ ô input và quay lại trang profile và in ra dữ liệu
  const saveProfile = (values) => {
    const payload = { ...values, id: uuidv4() };
    if (profile) {
      dispatch(editProfile({ ...values, id: profile.id }));
    } else {
      dispatch(addProfile(payload));
    }
    reset({
      userName: '',
      phoneNumber: '',
    });
    console.log(values);

    // navigate('/profile');
  };

  const onChange = (date) => {
    console.log(date);
  };

  // ấn cancel quay lại trang profile
  const onCancel = () => {
    navigate('/profile');
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const { profile } = useSelector((state) => state.profile);
  // console.log('update', profile);
  if (!profile) return;

  return (
    <div>
      <h1 className="headingProfile">My Profile</h1>
      <div className="profile">
        <Row gutter={24}>
          <div>
            <Col className="gutter-row" span={12}>
              <div className="profile-two">
                <form onSubmit={handleSubmit(saveProfile)}>
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
                        <Controller
                          name="dob"
                          control={control}
                          render={({ field }) => {
                            return (
                              <div>
                                <Space direction="vertical">
                                  <DatePicker {...field} onChange={onChange} />
                                </Space>
                              </div>
                            );
                          }}
                        />

                        {/* <Space direction="vertical">
                          <DatePicker onChange={onChange} />
                        </Space> */}
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col className="gutter-row" span={12}>
                      <div className="input-gender">
                        <span>Gender</span>
                        <Controller
                          name="male"
                          control={control}
                          render={({ field }) => (
                            <div>
                              <input {...field} type="radio" />
                              <label htmlFor="">Male</label>
                            </div>
                          )}
                        />
                        <Controller
                          name="female"
                          control={control}
                          render={({ field }) => {
                            return (
                              <div>
                                <input {...field} type="radio" />
                                <label htmlFor="">Female</label>
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
                        <span>Phone Number</span>
                        <Controller
                          name="phoneNumber"
                          value={profile.phoneNumber}
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
                  <Row gutter={16}>
                    <Col>
                      <button type="submit">Save</button>
                    </Col>
                    <Col>
                      <Button onClick={onCancel}>Cancel</Button>
                    </Col>
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
