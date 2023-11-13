import { Button, Input, Select, Table, Card, Space, Link } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';
import { fetchOwners } from '../store/reducers/Owner';
import { EyeOutlined } from '@ant-design/icons';

const Owners = () => {
  const columns = [
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
      render: () => (
        <Space size="middle">
          <Button>
            {' '}
            <EyeOutlined />{' '}
          </Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];

  const [query, setQuery] = useState({
    page: 1,
    limit: 2,
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

    setOwners(response.data.data.items);
    setPagination(response.data.data.pagination);
  };

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
  }, [query]);

  return (
    <div style={{ padding: '30px 20px 0 20px' }}>
      <Card>
        <div>
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
