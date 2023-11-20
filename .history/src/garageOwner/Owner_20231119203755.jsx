import { Button, Input, Select, Table, Card, Space } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';
// import { deleteOwners, fetchOwners, removeOwner }
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchOwnersById } from '../store/reducers/owner';

const { Option } = Select;
const Owners = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {} = useParams();
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: (value) => (
        <div
          style={{
            textTransform: 'lowercase',
          }}
        >
          {value}
        </div>
      ),
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, param2) => (
        <Space size="middle">
          {' '}
          <EyeOutlined
            onClick={() => {
              navigate(`/detailowner/${param2.id}`);
            }}
            // onClick={() => {
            //   navigate('/create');
            // }}
          />
          <EditOutlined
            onClick={() => {
              // navigate('/owner/editId');
              navigate(`/owner/${param2.id}`);
            }}
          />
          <DeleteOutlined onClick={deleteOwner} />
        </Space>
      ),
    },
  ];

  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    name: '',
    email: '',
    status: '',
  });

  const [owners, setOwners] = useState([]);
  const [pagination, setPagination] = useState({});
  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  const fetchOwners = async () => {
    const response = await axiosInstance.get('users', {
      params: query,
    });
    dispatch(fetchOwnersById(response));

    setOwners(response.data.data.items);

    setPagination(response.data.data.pagination);
  };

  console.log(owners);

  console.log(1, columns);

  // console.log(3, a);

  const onTableChange = (values) => {
    setQuery({ ...query, page: values.current });
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const onInputChange = (event) => {
    const value = event.target.value;

    setValue(value);
  };

  const onSearch = () => {
    if (type === 'name') {
      setQuery({ ...query, name: value });
    } else {
      setQuery({ ...query, email: value });
    }
  };

  useEffect(() => {
    // call API
    fetchOwners();
  }, [query, owners]);

  const handleEye = () => {
    // navigate('/details');
  };
  const handleAdd = () => {
    navigate('/owner/create');
  };

  const idNew = null;
  const data = owners;
  if (data && data.length > 0) {
    idNew = data[0].id;
  }

  const token = localStorage.getItem('accessToken') ?? '';

  const apiURL = `services/${idNew}`;

  const deleteOwner = () => {
    axiosInstance
      .delete(apiURL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });

    onTableChange();
  };
  // const handleDelete = async (owners) => {
  //   try {
  //     setOwners(owners.filter((owner) => owner._id !== owners._id));
  //     await axiosInstance.delete(`${''}/${owner._id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div style={{ padding: '30px 20px 0 20px' }}>
      <Card>
        <div>
          <h2> All Garage Owners</h2>

          <Button onClick={handleAdd}>Add Owner</Button>
          <Select
            defaultValue={type}
            style={{ width: 120 }}
            onChange={handleTypeChange}
            options={[
              { value: 'name', label: 'Name' },
              { value: 'email', label: 'Email' },
            ]}
          />
          <Input value={value} onChange={onInputChange} />
          <Button onClick={onSearch}>Search</Button>
          <Select
            style={{
              width: '200px',
            }}
          >
            <Option value="">active</Option>
            <Option value="">inactive</Option>
          </Select>
          <Table
            rowKey="id"
            dataSource={owners}
            columns={columns}
            pagination={{
              current: pagination.page,
              pageSize: pagination.limit,
              total: pagination.total,
            }}
            onChange={onTableChange}
          />
        </div>
      </Card>
    </div>
  );
};
export default Owners;
