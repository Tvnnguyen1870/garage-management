import React from 'react';
import { Segmented, Space, Switch, Table, Typography, Card } from 'antd';
import axiosInstance from '../services/axios.service';
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
    //chuyền thông tin vào
    id: index,
    name: `sffsdf`,
    email: `sfaf`,
    phone: 4632646,
  }));
  return data;
};
const Owner = () => {
  axiosInstance.get('/users', {});
  console.log(222, axiosInstance);
  const [fixed, setFixed] = React.useState(true);
  const [bordered, setBordered] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);
  const [count, setCount] = React.useState(10000);
  const data = React.useMemo(() => getData(count), [count]);
  const mergedColumns = React.useMemo(() => {
    if (!fixed) {
      return columns;
    }
    if (!expanded) {
      return fixedColumns;
    }
    return fixedColumns.map((col) => ({
      ...col,
      onCell: undefined,
    }));
  }, [expanded, fixed]);
  const expandableProps = React.useMemo(() => {
    if (!expanded) {
      return undefined;
    }
    return {
      columnWidth: 48,
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
          }}
        >
          🎉 Expanded {record.address1}
        </p>
      ),
      rowExpandable: (record) => record.id % 2 === 0,
    };
  }, [expanded]);
  return (
    <Card>
      <div>
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
          // rowSelection={
          //   expanded
          //     ? undefined
          //     : {
          //         type: 'radio',
          //         columnWidth: 48,
          //       }
          // }
          expandable={expandableProps}
        />
      </div>
    </Card>
  );
};
export default Owner;
