import { Button, Col, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';
import { useNavigate } from 'react-router-dom';
import { Option } from 'antd/es/mentions';
import Search from 'antd/es/input/Search';

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

  const navigate = useNavigate();

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

  const toCreateService = () => {
    navigate('/createservice');
  };

  useEffect(() => {
    // call API
    fetchService();
  }, [query]);

  return (
    <div
      className="profile"
      style={{
        marginTop: 30,
      }}
    >
      <div>
        <Row gutter={24}>
          <Col className="gutter-row" span={6}>
            <h2>All Garage Services</h2>
          </Col>
          <Col className="gutter-row" span={15}></Col>
          <Col className="gutter-row" span={3}>
            <Button onClick={toCreateService}>Add Service</Button>
          </Col>
        </Row>
      </div>

      {/* --------------------------- */}
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row gutter={24}>
          <Col className="gutter-row" span={8}>
            <Space.Compact
              style={{
                position: 'relative',
              }}
              block
            >
              <Select defaultValue={type} allowClear onChange={handleTypeChange}>
                <Option value="Name">Name</Option>
                <Option value="Email">Email</Option>
              </Select>
              <Search
                onChange={onInputChange}
                value={value}
                allowClear
                onSearch={onSearch}
                style={{
                  width: '100%',
                }}
              />
            </Space.Compact>
          </Col>
          <Col span={10}></Col>
        </Row>
      </div>

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
