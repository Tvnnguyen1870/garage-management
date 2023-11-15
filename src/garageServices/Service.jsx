import { Button, Input, Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { fetchServicesById } from '../store/reducers/service';
import { useDispatch } from 'react-redux';

const Service = () => {
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
      key: 'minPrice',
    },
    {
      title: 'Max price',
      dataIndex: 'maxPrice',
      key: 'maxPrice',

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
      dataIndex: 'action',
      key: 'action',
      render: (_, param2) => (
        <div>
          <Link to={`/detailservice/${param2.id}`}>View</Link>
          <button onClick={() => handleSubmit(param2)}></button>
          {/* <EditOutlined
            style={{
              paddingLeft: 12,
              paddingRight: 12,
            }}
            onClick={() => toEditManagement()}
          />
          <DeleteOutlined onClick={() => toManagementDetail()} /> */}
        </div>
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

  const [owners, setService] = useState([]);
  const [pagination, setPagination] = useState({});
  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const fetchService = async () => {
    const response = await axiosInstance.get('/services', {
      params: query,
    });

    dispatch(fetchServicesById(response));

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

  const handleSubmit = (a) => {
    console.log(a);
  };

  // const toAddGarage = () => {
  //   navigate('/managementcreate');
  // };
  const toServiceDetail = () => {
    navigate('/managementdetail');
  };
  const toEditService = () => {
    navigate('/managementedit');
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

export default Service;
