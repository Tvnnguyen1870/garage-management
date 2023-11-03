import { Button, Col, Row, Breadcrumb } from 'antd';
import '../assets/styles/creategarage.css';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';

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
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      garageName: '',
    },
  });

  const clickCancel = () => {
    navigate('/managementall');
  };

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
      <div className="garage-create ">
        <form>
          <Row>
            <Col span={8}>
              <span>Name *</span>
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
            </Col>
            <Col span={8}>
              <span>Name *</span>
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
            </Col>
            <Col span={8}>
              <span>Name *</span>
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
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <span>Name *</span>
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
            </Col>
            <Col span={8}>col</Col>
            <Col span={8}>col</Col>
          </Row>
          <Row>
            <Col span={8}>col</Col>
          </Row>
          <Row>
            <Col span={12}>
              <span>Name *</span>
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
            </Col>
            <Col span={12}>
              <span>Name *</span>
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
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>Save</Button>
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
