import { Button, Col, Row, Select, Space, Table } from 'antd';
import { Option } from 'antd/es/mentions';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getManagement, removeManagement } from '../store/reducers/management';

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
          <EyeOutlined onClick={() => toManagementDetail()} />
          <EditOutlined
            style={{
              paddingLeft: 12,
              paddingRight: 12,
            }}
            onClick={() => toEditManagement()}
          />
          <DeleteOutlined onClick={() => deleteManagement} />
        </div>
      ),
    },
  ];

  //------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  //  chuyển trang
  const toAddGarage = () => {
    navigate('/managementcreate');
  };
  const toManagementDetail = () => {
    navigate('/managementdetail');
  };
  const toEditManagement = () => {
    navigate('/managementedit');
  };

  //---------------------------
  const [params, setParams] = useState({
    page: 1,
    limit: 1,
    name: '',
    email: '',
    status: '',
  });

  // call API
  const { management } = useSelector((state) => state.management);

  useEffect(() => {
    dispatch(getManagement(params));
  }, [params]);

  console.log(management, 'management');

  // tìm kiếm
  const onSearch = () => {
    if (type === 'name') {
      setParams({ ...params, name: value });
    } else {
      setParams({ ...params, email: value });
    }
  };

  // xoa
  const deleteManagement = (values) => {
    dispatch(removeManagement(values));
  };

  const data = management?.items;
  const pagination = management?.pagination;

  const onTableChange = (pagination) => {
    setParams({ ...params, page: pagination.current, limit: pagination.pageSize });
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const onInputChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  if (!management) return;

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
          dataSource={data}
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
