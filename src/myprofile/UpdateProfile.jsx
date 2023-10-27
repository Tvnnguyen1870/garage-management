import { Controller, useForm } from 'react-hook-form';
import { DatePicker, Space } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  userName: yup.string().required('name is valid'),
  email: yup.string().required('email is valid').email('email is invalid'),
  phoneNumber: yup.number().required('phone number is valid'),
});

const UpdateProfile = () => {
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

  const onSubmit = (values) => {
    console.log(values);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <h1>My Profile</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Name</p>
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
          <p>Email</p>
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
          <p>DOB</p>
          <dir>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
          </dir>
          <p>Gender</p>
          <Controller
            name="male"
            control={control}
            render={({ field }) => {
              return (
                <div>
                  <input {...field} type="checkbox" />
                  Male
                </div>
              );
            }}
          />
          <Controller
            name="female"
            control={control}
            render={({ field }) => {
              return (
                <div>
                  <input {...field} type="checkbox" />
                  Female
                </div>
              );
            }}
          />
          <p>Phone</p>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => {
              return (
                <div>
                  <input {...field} type="text" placeholder="enter your phone" />
                  {errors['phoneNumber'] && <p>({errors.phoneNumber.message})</p>}
                </div>
              );
            }}
          />
          <div>
            <button type="submit">Save</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
