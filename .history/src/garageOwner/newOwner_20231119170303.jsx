import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Card, Row, Col, Space } from 'antd';
import { Controller, useForm } from 'react-hook-form';
const { Option } = Select;
import axiosInstance from '../services/axios.service';

export default function NewOwner() {
  const navigator = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
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
    <div>
      <Card>
        <form action="">
          <Row>
            <Col>
              <div>
                <span>Name</span>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="text" name="" id="" />
                      </div>
                    );
                  }}
                >
                  {' '}
                </Controller>
              </div>
            </Col>
            <Col>
              <div>
                <span>Email</span>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="email" name="" id="" />
                      </div>
                    );
                  }}
                >
                  {' '}
                </Controller>
              </div>
            </Col>
            <Col>
              <div>
                <span>Name</span>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="text" name="" id="" />
                      </div>
                    );
                  }}
                >
                  {' '}
                </Controller>
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
      </Card>
    </div>
  );
}
