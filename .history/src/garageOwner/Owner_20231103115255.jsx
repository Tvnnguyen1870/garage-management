import { Button, Select, Space, Table, Card, Input } from 'antd';
import Search from 'antd/lib/input/Search';
const { Option } = Select;
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOwner, fetchOwners } from '../store/reducers/Owner';
import { Link } from 'react-router-dom';

const Owner = () => {
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
  });
  const dispatch = useDispatch();
  const { manageOwner } = useSelector((state) => state.owner);

  useEffect(() => {
    dispatch(fetchOwners(params));
  }, [params]);
  // const handleDelete = (id) => {
  //   dispatch(deleteOwner(id));
  // };
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
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Link to="/create">Update</Link>
          <Link>Delete</Link>
        </Space>
      ),
    },
  ];
  const data = manageOwner?.items;
  // const pagination = manageOwner?.pagination;
  // console.log(pagination);

  // const onSearch = (value) => {
  //   setParams({ ...params, name: value });
  // };

  // const onTableChange = (pagination) => {
  //   setParams({ ...params, page: pagination.current, limit: pagination.pageSize });
  // };
  // const [filter, setFilter] = useState('');
  // const onFilterTypeChange = (value) => {
  //   setFilter(value);
  // };

  // console.log(222, filter);

  if (!manageOwner) return;

  return (
    <Card style={{ margin: '32px' }}>
      <div>
        <div className="title-container" style={{ display: 'flex', marginBottom: '24px' }}>
          <h2>All Garage Owners</h2>
          <Button>Add Owner</Button>
        </div>
        <div className="owner-list-content" style={{ marginBottom: '24px' }}>
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
              // onChange={onFilterTypeChange}
            />
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
          </Space.Compact>
        </div>
        <div>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={data}
            pagination={
              {
                // // current: pagination.page,
                // pageSize: pagination.limit,
                // total: pagination.total,
              }
            }
            onChange={onTableChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default Owner;
