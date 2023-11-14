import { Button, Input, Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

const Owners = () => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Min price',
      dataIndex: 'minPrice',
      key: 'min price',
    },
    {
      title: 'Max price',
      dataIndex: 'maxPrice',
      key: 'max price',
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
    limit: 10,
    name: '',
    email: '',
    status: '',
  });

  const [owners, setService] = useState([]);
  const [pagination, setPagination] = useState({});
  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  const fetchService = async () => {
    const response = await axiosInstance.get('/services', {
      params: query,
    });

    setService(response.data.data.items);
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
    fetchService();
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
  );
};

export default Owners;
