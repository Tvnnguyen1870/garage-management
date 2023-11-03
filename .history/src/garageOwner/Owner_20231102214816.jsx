import { Button, Select, Space, Table } from 'antd';
import Search from 'antd/lib/input/Search';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwners } from '../store/reducers/Owner';

import { Link } from 'react-router-dom';

const Owner = () => {
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
  });
  const dispatch = useDispatch();
  const { manageOwner } = useSelector((state) => state.owner);
  const { Option } = Select;

  useEffect(() => {
    dispatch(fetchOwners(params));
  }, [params]);

  const columns = [
    {
      title: '#',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Link>Update</Link>
          <Link>Delete</Link>
        </Space>
      ),
    },
  ];
  const data = manageOwner?.items;
  const pagination = manageOwner?.pagination;
  const handleChange = (value) => {
    setParams({ ...params, status: value });
  };
  const onSearch = (value) => {
    setParams({ ...params, name: value });
  };

  const onTableChange = (pagination) => {
    setParams({ ...params, page: pagination.current, limit: pagination.pageSize });
  };
  const [filter, setFilter] = useState('');
  const onFilterTypeChange = (value) => {
    setFilter(value);
  };

  console.log(222, filter);

  if (!manageOwner) return;

  return (
    <>
      <div>
        <div className="title-container">
          <h3>All Garage Owners</h3>
          <Button>Add Owner</Button>
        </div>
        <div className="owner-list-content">
          <Space.Compact className="search-content">
            <Select
              defaultValue="name"
              options={[
                {
                  label: 'Name',
                  value: 'name',
                },
                {
                  label: 'Email',
                  value: 'email',
                },
              ]}
              onChange={onFilterTypeChange}
            />
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
          </Space.Compact>

          <Select
            className="select-content"
            defaultValue="Status"
            style={{
              width: 220,
            }}
            onChange={handleChange}
            allowClear
          >
            <Option value="ACTIVE">Active</Option>
            <Option value="INACTIVE">Inactive</Option>
          </Select>
        </div>
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
      </div>
    </>
  );
};

export default Owner;
