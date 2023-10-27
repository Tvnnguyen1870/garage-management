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
    dataIndex: 'firstName',
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
    dataIndex: 'firstName',
    width: 120,
  },
];

return (
  <div
    style={{
      padding: 64,
    }}
  >
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
export default Owner;
