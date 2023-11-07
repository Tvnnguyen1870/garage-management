import { Button, Col, Row, Breadcrumb, Space, Select, TimePicker } from 'antd';
import '../assets/styles/creategarage.css';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Option } from 'antd/es/mentions';

const CreateGarageManagement = () => {
  const navigate = useNavigate();

  // const onFinish = async (values) => {
  //   let res = await loginAPI(values.email, values.password);

  //   localStorage.setItem('accessToken', res.accessToken);

  //   openNotification();

  //   navigate('/');
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  // const openNotification = () => {
  //   notification.open({
  //     message: 'LOGIN SUCCESS',
  //   });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      garageName: '',
      emailManagement: '',
      phoneNumberManagement: '',
      addressManagement: '',
      textAreaManagement: '',
      policyManagement: '',
    },
  });

  const onSave = (values) => {
    console.log(values);
  };

  const clickCancel = () => {
    navigate('/managementall');
  };

  const options = [];
  for (let i = 0; i < 24; i++) {
    options.push({
      label: i.toString(24) + i,
      value: i.toString(24) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const format = 'HH:mm';

  return (
    <div className="garage-create-management">
      <Breadcrumb
        style={{
          fontSize: 22,
        }}
        separator=">"
        items={[
          {
            title: 'All garages',
          },
          {
            title: 'Add a new garage',
          },
        ]}
      />
      <div className="garage-create">
        <form onSubmit={handleSubmit(onSave)}>
          <Row className="row-management">
            <Col span={8}>
              <div className="input-createManagement">
                <span className="name-span">Name</span>
                <Controller
                  name="garageName"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="text" placeholder="enter garage name" />
                        {errors['userName'] && <p>({errors.garageName.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
            <Col span={8}>
              <div className="input-createManagement">
                <span className="name-span">Email</span>
                <Controller
                  name="emailManagement"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="email" placeholder="enter garage email" />
                        {errors['emailManagement'] && <p>({errors.emailManagement.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
            <Col span={8}>
              <div className="input-createManagement">
                <span className="name-span">Phone Number</span>
                <Controller
                  name="phoneNumberManagement"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="tel" placeholder="enter garage name" />
                        {errors['phoneNumberManagement'] && <p>({errors.phoneNumberManagement.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="row-management">
            <Col span={8}>
              <div className="input-createManagement">
                <span className="name-span">Address</span>
                <Controller
                  name="addressManagement"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="text" placeholder="enter garage name" />
                        {errors['addressManagement'] && <p>({errors.addressManagement.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
            <Col span={8}>
              <div>
                <span className="name-span">Open time</span>
                <br />
                <TimePicker
                  className="time-management"
                  allowClear
                  defaultValue={dayjs('12:08', format)}
                  format={format}
                />
              </div>
            </Col>
            <Col span={8}>
              <div>
                <span className="name-span">Close time</span>
                <br />
                <TimePicker
                  className="time-management"
                  allowClear
                  defaultValue={dayjs('12:08', format)}
                  format={format}
                />
              </div>
            </Col>
          </Row>
          <Row className="row-management">
            <Col span={8}>
              <div
                style={{
                  width: '90%',
                }}
              >
                <span className="name-span">Services</span>
                <Select
                  mode="multiple"
                  style={{
                    width: '100%',
                  }}
                  placeholder="select one country"
                  defaultValue={['TLS']}
                  onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="garage" label="Garage">
                    <Space>Garage</Space>
                  </Option>
                  <Option value="TLS" label="TLS">
                    <Space>TLS</Space>
                  </Option>
                  <Option value="AHC" label="AHC">
                    <Space>AHC</Space>
                  </Option>
                  <Option value="CB Garage" label="CB Garage">
                    <Space>CB Garage</Space>
                  </Option>
                  <Option value="UCQ" label="UCQ">
                    <Space>UCQ</Space>
                  </Option>
                </Select>
              </div>
            </Col>
          </Row>
          <Row className="row-management">
            <Col span={12}>
              <div className="des-management">
                <span className="name-span">Desciption</span>
                <Controller
                  name="textAreaManagement"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <textarea {...field} type="text" placeholder="this is description" />
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="des-management">
                <span className="name-span">Policy</span>
                <Controller
                  name="policyManagement"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <textarea {...field} type="text" placeholder="enter garage policy" />
                        {errors['policyManagement'] && <p>({errors.policyManagement.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="row-management">
            <Col
              style={{
                display: 'flex',
              }}
            >
              <button className="btn-add-management" type="submit">
                Save
              </button>
            </Col>
            <Col>
              <Button onClick={clickCancel}>Cancel</Button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default CreateGarageManagement;