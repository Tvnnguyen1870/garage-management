// import { Button, Form, Input, Select, DatePicker, Row, Col, Card } from 'antd';
// import { useNavigate } from 'react-router-dom';
// // import axiosInstance from '../services/axios.service';
// const { Option } = Select;

// //  const Api = axiosInstance.get("", {})
// const options = [];
// for (let i = 10; i < 36; i++) {
//   options.push({
//     label: i.toString(36) + i,
//     value: i.toString(36) + i,
//   });
// }
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
// const formItemLayout = { wrapperCol: { span: 14, offset: 4 } };

// const config = {
//   rules: [
//     {
//       type: 'object',
//       required: true,
//       message: 'Please select time!',
//     },
//   ],
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };
// const Create = () => {
//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };
//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     </Form.Item>
//   );
//   const navigate = useNavigate();

//   const handleSave = () => {
//     // navigate('/owner');
//   };

//   const handleCancel = () => {
//     // navigate('/owner');
//   };

//   return (
//     <div style={{ padding: '40px' }}>
//       <div style={{ display: 'flex', marginBottom: '32px' }}>
//         <h2 style={{ color: 'var(--neutral-light-2, #939393)' }}>All garages </h2>
//         <h2> > Add a new owner</h2>
//       </div>
//       <Card>
//         <div>
//           <Form
//             {...formItemLayout}
//             form={form}
//             name="register"
//             onFinish={onFinish}
//             initialValues={{
//               residence: ['zhejiang', 'hangzhou', 'xihu'],
//               prefix: '86',
//             }}
//             style={{
//               maxWidth: '100%',
//             }}
//             scrollToFirstError
//           >
//             <Row gutter={24}>
//               <Col className="gutter-row" span={8}>
//                 <Form.Item
//                   name="fullname"
//                   label="Nickname"
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Please input your nickname!',
//                       whitespace: true,
//                     },
//                   ]}
//                 >
//                   <br />
//                   <Input style={{ right: '175px', marginTop: '20px' }} />
//                 </Form.Item>
//               </Col>

//               <Col className="gutter-row" span={8}>
//                 <Form.Item
//                   name="email"
//                   label="E-mail"
//                   rules={[
//                     {
//                       type: 'email',
//                       message: 'The input is not valid E-mail!',
//                     },
//                     {
//                       required: true,
//                       message: 'Please input your E-mail!',
//                     },
//                   ]}
//                 >
//                   <br />
//                   <Input style={{ right: '150px', marginTop: '20px' }} />
//                 </Form.Item>
//               </Col>

//               <Col className="gutter-row" span={8}>
//                 <Form.Item
//                   name="password"
//                   label="Password"
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Please input your password!',
//                     },
//                   ]}
//                   hasFeedback
//                 >
//                   <br />
//                   <Input.Password style={{ right: '170px', marginTop: '20px' }} />
//                 </Form.Item>
//               </Col>

//               <Col className="gutter-row" span={8}>
//                 <Form.Item
//                   name="phoneNumber"
//                   label="Phone Number"
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Please input your phone number!',
//                     },
//                   ]}
//                 >
//                   <br />
//                   <Input style={{ right: '205px', marginTop: '20px' }} />
//                 </Form.Item>
//               </Col>

//               <Col className="gutter-row" span={8}>
//                 <Form.Item
//                   name="gender"
//                   label="Gender"
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Please select gender!',
//                     },
//                   ]}
//                 >
//                   <br />
//                   <Select placeholder="select your gender" style={{ right: '160px', marginTop: '20px' }}>
//                     <Option value="male">Male</Option>
//                     <Option value="female">Female</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>

//               <Col className="gutter-row" span={8}>
//                 <Form.Item name="dob" label="DOB" {...config}>
//                   <br />
//                   <DatePicker style={{ right: '140px', marginTop: '20px' }} />
//                 </Form.Item>
//               </Col>

//               <Col className="gutter-row" span={8}>
//                 <Form.Item
//                   name="role"
//                   label="Role"
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Please select gender!',
//                     },
//                   ]}
//                 >
//                   <br />
//                   <Select placeholder="select your gender" style={{ right: '140px', marginTop: '20px' }}>
//                     <Option value="male">User</Option>
//                     <Option value="female">Admin</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>

//               <Col className="gutter-row" span={12}>
//                 <Form.Item
//                   name="garagIds"
//                   label="Garages"
//                   rules={[
//                     {
//                       required: true,
//                       message: 'Please select gender!',
//                     },
//                   ]}
//                 >
//                   {' '}
//                   <br />
//                   <Select
//                     mode="multiple"
//                     allowClear
//                     style={{
//                       right: '210px',
//                       marginTop: '20px',
//                       maxWidth: "300px"
//                     }}
//                     placeholder="Please select"
//                     onChange={handleChange}
//                     options={options}
//                   />
//                 </Form.Item>
//               </Col>
//             </Row>
//
//           </Form>
//         </div>
//       </Card>
//     </div>
//   );
// };
// export default Create;

import React, { useState } from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
  Card,
} from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Create = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div>
      <Card>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="fullName"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item name="dob" label="DOB" {...config}>
            <DatePicker style={{ right: '140px', marginTop: '20px' }} />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select placeholder="select your gender" style={{ right: '140px', marginTop: '20px' }}>
              <Option value="male">User</Option>
              <Option value="female">Admin</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="garageIds"
            label="Garages"
            rules={[
              {
                required: true,
                message: 'Please select garageIds!',
              },
            ]}
          >
            {' '}
            <Select mode="multiple" allowClear placeholder="Please select" onChange={handleChange} options={options} />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Create;
