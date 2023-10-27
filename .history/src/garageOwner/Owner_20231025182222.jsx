import React from 'react';
import { Table, Typography } from 'antd';
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_, index) => {
  if (index === 1) {
    return {
      colSpan: 0,
    };
  }
  return {};
};
const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 5 : 1,
    }),
  },
  {
    title: 'Phone',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: (_, index) => {
      if (index === 3) {
        return {
          rowSpan: 2,
        };
      }
      // These two are merged into above cell
      if (index === 4) {
        return {
          rowSpan: 0,
        };
      }
      if (index === 1) {
        return {
          colSpan: 0,
        };
      }
      return {};
    },
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

const Owner = () => <Table columns={columns} bordered />;
export default Owner;
