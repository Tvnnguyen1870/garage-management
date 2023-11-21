import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Card, Row, Col, Space } from 'antd';

const { Option } = Select;
import axiosInstance from '../services/axios.service';

export default function NewOwner() {
  const navigator = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [owners, setOwners] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    role: '',
    garage: '',
  });

  useEffect(() => {
    if (id === 'create') return;
    const fetchOwners = async () => {
      const response = await axiosInstance.get(`${'users'}/${id}`);
      console.log(response);
      setOwners(response.data.data);
    };
    fetchOwners();
  }, []);

  console.log(44, owners);

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
}
