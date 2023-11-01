import React from 'react';
import { Segmented, Space, Switch, Table, Typography, Card } from 'antd';
const fixedColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Name',
    dataIndex: 'name',
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
    dataIndex: 'phone',
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
        <Typography.Link>Eye</Typography.Link>
        <Typography.Link>Edit</Typography.Link>
        <Typography.Link>Delete</Typography.Link>
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
    title: 'email',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    width: 120,
  },
];
const getData = (count) => {
  const data = new Array(count).fill(null).map((_, index) => ({
    id: index,
    name: ``,
    email: ``,
    phone: 86,
  }));
  return data;
};
const Owner = () => {
  return (
    <Card>
      <div>
        <Table
          // bordered={bordered}
          virtual
          // columns={mergedColumns}
          scroll={{
            x: 2000,
            y: 400,
          }}
          rowKey="id"
          // dataSource={empty ? [] : data}
          pagination={false}
          // rowSelection={
          //   expanded
          //     ? undefined
          //     : {
          //         type: 'radio',
          //         columnWidth: 48,
          //       }
          // }
          // expandable={expandableProps}
        />
      </div>
    </Card>
  );
};
export default Owner;
