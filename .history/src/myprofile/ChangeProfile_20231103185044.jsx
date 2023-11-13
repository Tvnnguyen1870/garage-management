// import { yupResolver } from '@hookform/resolvers/yup';
// import { Controller, useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { EyeOutlined } from '@ant-design/icons';
// import { Col, Row } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import '../assets/styles/changepassword.css';

// const ChangeProfile = () => {
//   const navigate = useNavigate();

//   // hàm cancel quay lại trang profile
//   const clickCancel = () => {
//     navigate('/profile');
//   };

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       currentPassword: '',
//       newPassword: '',
//       confirmPassword: '',
//     },
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (values) => {
//     console.log(values);
//   };

//   // show password
//   const ClickShowPassword = () => {
//     console.log('lol');
//   };

//   // hàm savepassword : lưu trữ, thay đổi passsword và quay lại trang profile
//   const savePassword = () => {
//     navigate('/profile');
//   };

//   return (
//     <div>
//       <h1 className="headingProfile">Change Password</h1>
//       <div className="profilePassword">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <h3 className="heading-changePassword">Now you can create a new password for your account</h3>
//           <div>
//             <Row gutter={24}>
//               <Col className="gutter-row" span={24}>
//                 <div className="input-changePassword">
//                   <span>Current Password</span>
//                   <Controller
//                     name="currentPassword"
//                     control={control}
//                     render={({ field }) => {
//                       return (
//                         <div>
//                           <input {...field} type="password" placeholder="enter your password" />
//                           {errors['currentPassword'] && <p>({errors.currentPassword.message})</p>}
//                         </div>
//                       );
//                     }}
//                   />
//                 </Space>
//               </Space>
//             </Col>

//             <Col>
//               <Button className="btn-changepassword-profile" onClick={savePassword}>
//                 Save
//               </Button>
//             </Col>
//             <Col>
//               <Button className="btn-changepassword-profile" onClick={clickCancel}>
//                 Cancel
//               </Button>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChangeProfile;
