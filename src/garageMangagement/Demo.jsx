import { Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';
import Search from 'antd/es/input/Search';

const Demo = () => {
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
  ];

  const [query, setQuery] = useState({
    page: 1,
    limit: 1,
    name: '',
    email: '',
    status: '',
  });

  // set gia tri ban dau cua api
  const [owners, setOwners] = useState([]);

  // phan trang
  const [pagination, setPagination] = useState({});

  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  //call api
  const fetchOwners = async () => {
    const response = await axiosInstance.get('/users', {
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
      {/* <Input value={value} onChange={onInputChange} /> */}
      <Search
        onChange={onInputChange}
        value={value}
        allowClear
        onSearch={onSearch}
        style={{
          width: '100%',
        }}
      />
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
  );
};

export default Demo;
