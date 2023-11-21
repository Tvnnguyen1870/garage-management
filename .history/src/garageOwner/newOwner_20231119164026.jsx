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
    <div>
      <form action="">
        <input type="text" placeholder="Name" value={owners.fullName} />
        <input type="email" placeholder="Name" value={owners.email} />
      </form>
    </div>
  );
}
