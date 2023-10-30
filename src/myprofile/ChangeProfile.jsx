import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { EyeOutlined } from '@ant-design/icons';

const schema = yup.object().shape({
  currentPassword: yup.string().required('name is valid'),
  newPassword: yup.string().required('name is valid'),
  confirmPassword: yup.string().required('name is valid'),
});

const ChangeProfile = () => {
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
  return (
    <div>
      <h1>Change Password</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Now you can create a new password for your account</p>
          <p>Current Password</p>
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
          <p>New Password</p>
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => {
              return (
                <div>
                  <input {...field} type="password" placeholder="enter your new password" /> <EyeOutlined />
                  {errors['newPassword'] && <p>({errors.newPassword.message})</p>}
                </div>
              );
            }}
          />
          <p>Confirm Password</p>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => {
              return (
                <div>
                  <input {...field} type="password" placeholder="enter confirm password" /> <EyeOutlined />
                  {errors['confirmPassword'] && <p>({errors.confirmPassword.message})</p>}
                </div>
              );
            }}
          />
          <div>
            <button type="Submit">Save</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeProfile;
