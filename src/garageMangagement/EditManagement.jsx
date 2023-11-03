import { Button, Col, Row, Breadcrumb, TimePicker } from 'antd';
import '../assets/styles/creategarage.css';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

const EditManagement = () => {
  const navigate = useNavigate();

  const {
    control,
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
            title: 'Gara 1',
          },
        ]}
      />
      <div className="garage-create">
        <form>
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
                <TimePicker className="time-management" defaultValue={dayjs('12:08', format)} format={format} />
              </div>
            </Col>
            <Col span={8}>
              <div>
                <span className="name-span">Close time</span>
                <br />
                <TimePicker className="time-management" defaultValue={dayjs('12:08', format)} format={format} />
              </div>
            </Col>
          </Row>
          <Row className="row-management">
            <Col span={12}>
              <div className="des-management">
                <span>Desciption</span>
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
            <Col>
              <Button
                style={{
                  marginRight: 20,
                }}
              >
                Save
              </Button>
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

export default EditManagement;
