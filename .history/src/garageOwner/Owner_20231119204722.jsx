import { Button, Col, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { fetchOwnersById } from '../store/reducers/owner';
import { useDispatch, useSelector } from 'react-redux';
import { Option } from 'rc-select';
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
      dataIndex: 'fullName',
      key: 'fullName',
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
      render: (_, param2) => (
        <div>
          <Link to={`/detailowner/${param2.id}`}>
            <EyeOutlined />
          </Link>
          <EditOutlined
            style={{
              paddingLeft: 12,
              paddingRight: 12,
            }}
          />
          <DeleteOutlined onClick={deleteOwner} />
        </div>
      ),
    },
  ];

  // const navigate = useNavigate();

  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    name: '',
    email: '',
    status: '',
  });

  const navigate = useNavigate();
  const [owners, setOwners] = useState([]);
  const [pagination, setPagination] = useState({});
  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const fetchService = async () => {
    const response = await axiosInstance.get('/users', {
      params: query,
    });

    dispatch(fetchOwnersById(response));

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

  const handleSubmit = (a) => {
    console.log(a);
  };

  const toServiceDetail = () => {
    // navigate('/managementdetail');
  };
  const toEditService = () => {
    // navigate('/managementedit');
  };

  const onSearch = () => {
    if (type === 'name') {
      setQuery({ ...query, name: value });
    } else {
      setQuery({ ...query, email: value });
    }
  };

  const handleAdd = () => {
    navigate('/create');
  };

  useEffect(() => {
    // call API
    fetchService();
  }, [query, owners]);

  //-------------------------
  let idNew = null;
  const data = owners;
  if (data && data.length > 0) {
    idNew = data[0].id;
  }
  // //xoa
  const token = localStorage.getItem('accessToken') ?? '';

  const apiURL = `users/${idNew}`;

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
            <h2>All Garage Owner</h2>
          </Col>
          <Col className="gutter-row" span={15}></Col>
          <Col className="gutter-row" span={3}>
            <Button onClick={handleAdd}>Add Service</Button>
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
