import React from 'react';
import { Segmented, Space, Switch, Table, Typography } from 'antd';
const fixedColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'Phone',
    dataIndex: 'Phone',
    width: 120,
    fixed: 'left',
  },
  {
    title: 'Action',
    width: 150,
    fixed: 'right',
    render: () => (
      <Space>
        <Typography.Link>Action1</Typography.Link>
        <Typography.Link>Action2</Typography.Link>
      </Space>
    ),
  },
];
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 120,
  },
];
const getData = (count) => {
  const data = new Array(count).fill(null).map((_, index) => ({
    id: index,
    Name: `First_${index.toString(16)}`,
    lastName: `Last_${index.toString(16)}`,
    age: 25 + (index % 10),
    address1: `New York No. ${index} Lake Park`,
    address2: `London No. ${index} Lake Park`,
    address3: `Sydney No. ${index} Lake Park`,
  }));
  return data;
};
const Owner = () => {
  return (
    <div
      style={{
        padding: 64,
      }}
    >
      <h3>All Garage Owners</h3>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Table
          bordered={bordered}
          virtual
          columns={mergedColumns}
          scroll={{
            x: 2000,
            y: 400,
          }}
          rowKey="id"
          dataSource={empty ? [] : data}
          pagination={false}
          expandable={expandableProps}
        />
      </Space>
    </div>
  );
};
export default Owner;
