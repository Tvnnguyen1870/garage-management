import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segmented, Space, Switch, Table, Typography, Card, Select, Input, Row, Col, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchOwners } from '../store/reducers/Owner';
// import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
// import { api } from '../store/reducers/Owner';
const { Option } = Select;
const fixedColumns = [
  {
    title: 'ID',
    dataIndex: 'id',

    width: 100,
    fixed: 'left',
  },
  {
    title: 'Name',
    dataIndex: 'fullName',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'email',
    dataIndex: 'email',
    width: 120,
    fixed: 'left',
  },

  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    width: 300,
    fixed: 'left',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 100,
    fixed: 'left',
  },

  {
    title: 'Action',
    width: 150,
    fixed: 'right',
    render: () => (
      <Space>
        <Button> Eye </Button>
        <Button> Edit </Button>
        <Button> Detele </Button>
        {/* <EyeOutlined />
        <EditOutlined />
        <DeleteOutlined /> */}
      </Space>
    ),
  },
];

const selectBefore = (
  <Select defaultValue="Name">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue="">
    <Option value="active">Active</Option>
    <Option value="inactive">Inactive</Option>
  </Select>
);
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: 'Name',
    dataIndex: 'fullName',
    key: 'fullName',
    width: 120,
  },
  {
    title: 'email',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    width: 120,
  },
];

const Owner = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/create');
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwners());
  }, []);

  const { manageOwner, ownerStore } = useSelector((state) => state.owner);

  console.log(ownerStore);

  const apiCall = manageOwner.items;

  console.log('api', apiCall);

  const getdata = () => {
    const data = apiCall.map((index, count) => ({
      //chuyền thông tin vào
      id: index,
      name: count.fullName,
      email: `sfaf`,
      phone: 4632646,
    }));
    return data;
  };

  return (
    <div style={{ padding: '40px' }}>
      <Card>
        <div style={{ display: 'flex' }}>
          <h2 style={{ display: 'flex', marginBottom: '24px' }}>All Garages Owner</h2>
          <Button type="primary" onClick={handleAdd}>
            Add Owner
          </Button>
        </div>
        <Row gutter={16} style={{ marginBottom: '24px' }}>
          <Col span={8}>
            <Input addonBefore={selectBefore} placeholder="Search" />
          </Col>
          <Col span={8}>
            <Input addonAfter={selectAfter} placeholder="Status" />
          </Col>
        </Row>

        <div>
          {/* <Table
            bordered={bordered}
            virtual
            columns={mergedColumns}
            scroll={{
              x: 2000,
              y: 400,
            }}
            rowKey="id"
            dataSource={data}
            pagination={false}
            expandable={expandableProps}
          /> */}
          <Table
            rowKey="id"
            columns={columns}
            dataSource={getdata}
            pagination={
              {
                // current: pagination.page,
                // pageSize: pagination.limit,
                // total: pagination.total,
              }
            }
            // onChange={onTableChange}
          />
        </div>
      </Card>
    </div>
  );
};
export default Owner;
