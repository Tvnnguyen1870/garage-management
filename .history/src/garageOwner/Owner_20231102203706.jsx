import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Segmented, Space, Switch, Table, Typography, Card, Select, Input, Row, Col, Button } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { fetchOwners } from '../store/reducers/Owner';
// // import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
// // import { api } from '../store/reducers/Owner';
// const { Option } = Select;
// const fixedColumns = [
//   {
//     title: 'ID',
//     dataIndex: 'id',

//     width: 100,
//     fixed: 'left',
//   },
//   {
//     title: 'Name',
//     dataIndex: 'fullName',
//     width: 120,
//     fixed: 'left',
//   },
//   {
//     title: 'email',
//     dataIndex: 'email',
//     width: 120,
//     fixed: 'left',
//   },

//   {
//     title: 'Phone Number',
//     dataIndex: 'phoneNumber',
//     width: 300,
//     fixed: 'left',
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     width: 100,
//     fixed: 'left',
//   },

//   {
//     title: 'Action',
//     width: 150,
//     fixed: 'right',
//     render: () => (
//       <Space>
//         <Button> Eye </Button>
//         <Button> Edit </Button>
//         <Button> Detele </Button>
//         {/* <EyeOutlined />
//         <EditOutlined />
//         <DeleteOutlined /> */}
//       </Space>
//     ),
//   },
// ];

// const selectBefore = (
//   <Select defaultValue="Name">
//     <Option value="http://">http://</Option>
//     <Option value="https://">https://</Option>
//   </Select>
// );
// const selectAfter = (
//   <Select defaultValue="">
//     <Option value="active">Active</Option>
//     <Option value="inactive">Inactive</Option>
//   </Select>
// );
// const columns = [
//   {
//     title: 'ID',
//     dataIndex: 'id',
//     key: 'id',
//     width: 100,
//   },
//   {
//     title: 'Name',
//     dataIndex: 'fullName',
//     key: 'fullName',
//     width: 120,
//   },
//   {
//     title: 'email',
//     dataIndex: 'email',
//     width: 120,
//   },
//   {
//     title: 'Phone Number',
//     dataIndex: 'phoneNumber',
//     width: 120,
//   },
// ];

// const Owner = () => {
//   const [fixed, setFixed] = React.useState(true);

//   const [expanded, setExpanded] = React.useState(false);

//   const navigate = useNavigate();

//   const handleAdd = () => {
//     navigate('/create');
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchOwners());
//   }, []);

//   const { manageOwner, ownerStore } = useSelector((state) => state.owner);

//   console.log(ownerStore);

//   const apiCall = manageOwner.items;

//   console.log('api', apiCall);

//   const data = (count) => {
//     const data = apiCall.map((index, count) => ({
//       //chuyền thông tin vào
//       id: index,
//       name: count.fullName,
//       email: `sfaf`,
//       phone: 4632646,
//     }));
//     return data;
//   };

//   return (
//     <div style={{ padding: '40px' }}>
//       <Card>
//         <div style={{ display: 'flex' }}>
//           <h2 style={{ display: 'flex', marginBottom: '24px' }}>All Garages Owner</h2>
//           <Button type="primary" onClick={handleAdd}>
//             Add Owner
//           </Button>
//         </div>
//         <Row gutter={16} style={{ marginBottom: '24px' }}>
//           <Col span={8}>
//             <Input addonBefore={selectBefore} placeholder="Search" />
//           </Col>
//           <Col span={8}>
//             <Input addonAfter={selectAfter} placeholder="Status" />
//           </Col>
//         </Row>

//         <div>
//           {/* <Table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ownerStore.apiCall.map((owner, index) => (
//                 <tr key={index}>
//                   <td>{index}</td>
//                   <td>{owner.fullName}</td>
//                   <td>{owner.email}</td>
//                   <td>{owner.phoneNumber}</td>
//                   <td>
//                     <button>Remove</button>
//                     <button>Edit</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table> */}
//           {/* <Table
//             bordered={bordered}
//             virtual
//             columns={mergedColumns}
//             scroll={{
//               x: 2000,
//               y: 400,
//             }}
//             rowKey="id"
//             dataSource={data}
//             pagination={false}
//             expandable={expandableProps}
//           /> */}
//           <Table
//             rowKey="id"
//             columns={columns}
//             dataSource={data}
//             pagination={
//               {
//                 // current: pagination.page,
//                 // pageSize: pagination.limit,
//                 // total: pagination.total,
//               }
//             }
//             // onChange={onTableChange}
//           />
//         </div>
//       </Card>
//     </div>
//   );
// };
// export default Owner;

import { Button, Select, Space, Table } from 'antd';
import Search from 'antd/lib/input/Search';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwners } from '../../../Store/reducers/owner';
import './List.css';
import { Link } from 'react-router-dom';

const OwnerList = () => {
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

export default OwnerList;
