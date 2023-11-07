import { Button, Col, Row, Select, Space, Table } from 'antd';
import { Option } from 'antd/es/mentions';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';
import axiosInstance from '../services/axios.service';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const GarageManagementAll = () => {
  //--------------------------------------
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phone number',
    },
    {
      title: 'Status',
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
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <div>
          <EyeOutlined onClick={() => toDetail()} />
          <EditOutlined
            style={{
              paddingLeft: 12,
              paddingRight: 12,
            }}
          />
          <DeleteOutlined />
        </div>
      ),
    },
  ];

  //------------------------------------

  const navigate = useNavigate();

  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  const onSearch = () => {
    if (type === 'name') {
      setQuery({ ...query, name: value });
    } else {
      setQuery({ ...query, email: value });
    }
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

  const toAddGarage = () => {
    navigate('/managementcreate');
  };
  const toDetail = () => {
    navigate('/managementdetail');
  };

  // --------------------
  const [query, setQuery] = useState({
    page: 1,
    limit: 2,
    name: '',
    email: '',
    status: '',
  });

  const [management, setManagement] = useState([]);

  // phan trang
  const [pagination, setPagination] = useState({});

  const fetchManagement = async () => {
    const response = await axiosInstance.get('/garages', {
      params: query,
    });

    setManagement(response.data.data.items);
    setPagination(response.data.data.pagination);
  };

  useEffect(() => {
    // call API
    fetchManagement();
  }, [query]);
  return (
    <div
      className="profile"
      style={{
        marginTop: 30,
      }}
    >
      <div
        style={{
          marginBottom: 30,
        }}
      >
        <Row gutter={24}>
          <Col className="gutter-row" span={3}>
            <h2>All Garages</h2>
          </Col>
          <Col className="gutter-row" span={18}></Col>
          <Col className="gutter-row" span={3}>
            <Button onClick={toAddGarage}>Add Garage</Button>
          </Col>
        </Row>
      </div>
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

      {/* ------------------------------------------- */}
      <div>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={management}
          pagination={{
            current: pagination.page,
            pageSize: pagination.limit,
            total: pagination.total,
          }}
          onChange={onTableChange}
        />
      </div>
      {/* --------------------------------------------*/}
    </div>
  );
};

export default GarageManagementAll;
