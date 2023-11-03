// import React, { useEffect } from 'react';
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
// const getData = (count) => {
//   const data = new Array(count).fill(null).map((_, index) => ({
//     //chuyền thông tin vào
//     id: index,
//     name: 'sfsdf',
//     email: `sfaf`,
//     phone: 4632646,
//   }));
//   return data;
// };

// const Owner = () => {
//   // axiosInstance.get('users', {}), console.log(222, axiosInstance);
//   const [fixed, setFixed] = React.useState(true);
//   const [bordered, setBordered] = React.useState(true);
//   const [expanded, setExpanded] = React.useState(false);
//   const [empty, setEmpty] = React.useState(false);
//   const [count, setCount] = React.useState(10000);
//   const data = React.useMemo(() => getData(count), [count]);
//   const mergedColumns = React.useMemo(() => {
//     if (!fixed) {
//       return columns;
//     }
//     if (!expanded) {
//       return fixedColumns;
//     }
//     return fixedColumns.map((col) => ({
//       ...col,
//       onCell: undefined,
//     }));
//   }, [expanded, fixed]);
//   const expandableProps = React.useMemo(() => {
//     if (!expanded) {
//       return undefined;
//     }
//     return {
//       columnWidth: 48,

//       rowExpandable: (record) => record.id % 2 === 0,
//     };
//   }, [expanded]);
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
//           <Table
//             bordered={bordered}
//             virtual
//             columns={mergedColumns}
//             scroll={{
//               x: 2000,
//               y: 400,
//             }}
//             rowKey="id"
//             dataSource={empty ? [] : data}
//             pagination={false}
//             expandable={expandableProps}
//           />
//         </div>
//       </Card>
//     </div>
//   );
// };
// export default Owner;

// // import { Button, Select, Space, Table } from 'antd';
// // import Search from 'antd/lib/input/Search';

// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';

// // // import './List.css';
// // import { Link } from 'react-router-dom';
// // import { fetchOwners } from '../store/reducers/Owner';

// // const Owner = () => {
// //   const [params, setParams] = useState({
// //     page: 1,
// //     limit: 2,
// //   });
// //   const dispatch = useDispatch();
// //   const { manageOwner } = useSelector((state) => state.owner);
// //   const { Option } = Select;

// //   useEffect(() => {
// //     dispatch(fetchOwners(params));
// //   }, [params]);

// //   const columns = [
// //     {
// //       title: '#',
// //       key: 'id',
// //       dataIndex: 'id',
// //     },
// //     {
// //       title: 'Name',
// //       dataIndex: 'fullName',
// //       key: 'fullName',
// //       render: (text) => <Link>{text}</Link>,
// //     },
// //     {
// //       title: 'Email',
// //       dataIndex: 'email',
// //       key: 'email',
// //     },
// //     {
// //       title: 'Phone number',
// //       dataIndex: 'phoneNumber',
// //       key: 'phoneNumber',
// //     },
// //     {
// //       title: 'Status',
// //       dataIndex: 'status',
// //       key: 'status',
// //     },
// //     {
// //       title: 'Action',
// //       key: 'action',
// //       render: () => (
// //         <Space size="middle">
// //           <Link>Update</Link>
// //           <Link>Delete</Link>
// //         </Space>
// //       ),
// //     },
// //   ];
// //   const data = manageOwner?.items;
// //   const pagination = manageOwner?.pagination;
// //   const handleChange = (value) => {
// //     setParams({ ...params, status: value });
// //   };
// //   const onSearch = (value) => {
// //     setParams({ ...params, name: value });
// //   };

// //   const onTableChange = (pagination) => {
// //     setParams({ ...params, page: pagination.current, limit: pagination.pageSize });
// //   };
// //   const [filter, setFilter] = useState('');
// //   const onFilterTypeChange = (value) => {
// //     setFilter(value);
// //   };
// //   console.log(manageOwner);

// //   console.log(222, filter);

// //   if (!manageOwner) return;

// //   return (
// //     <>
// //       <div>
// //         <div className="title-container">
// //           <h3>All Garage Owners</h3>
// //           <Button>Add Owner</Button>
// //         </div>
// //         <div className="owner-list-content">
// //           <Space.Compact className="search-content">
// //             <Select
// //               defaultValue="name"
// //               options={[
// //                 {
// //                   label: 'Name',
// //                   value: 'name',
// //                 },
// //                 {
// //                   label: 'Email',
// //                   value: 'email',
// //                 },
// //               ]}
// //               onChange={onFilterTypeChange}
// //             />
// //             <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
// //           </Space.Compact>

// //           <Select
// //             className="select-content"
// //             defaultValue="Status"
// //             style={{
// //               width: 220,
// //             }}
// //             onChange={handleChange}
// //             allowClear
// //           >
// //             <Option value="ACTIVE">Active</Option>
// //             <Option value="INACTIVE">Inactive</Option>
// //           </Select>
// //         </div>
// //         <div>
// //           <Table
// //             rowKey="id"
// //             columns={columns}
// //             dataSource={data}
// //             pagination={
// //               {
// //                 // current: pagination.page,
// //                 // pageSize: pagination.limit,
// //                 // total: pagination.total,
// //               }
// //             }
// //             onChange={onTableChange}
// //           />
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Owner;



import { Button, Col, Input, Pagination, Row, Select, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import { useNavigate } from 'react-router';

const GarageManagementAll = () => {
  const navigate = useNavigate();

  const toAddGarage = () => {
    navigate('/managementcreate');
  };
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
          <Col className="gutter-row" span={12}>
            <Space.Compact block>
              <Select defaultValue="Name" allowClear>
                <Option value="Name">Name</Option>
                <Option value="Email">Email</Option>
              </Select>
              <Input
                style={{
                  width: '50%',
                }}
                defaultValue="name"
              />
            </Space.Compact>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          gutter={24}
          style={{
            height: 54,
            marginLeft: 2,
            marginRight: 2,
            backgroundColor: '#ccc',
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <Col className="gutter-row" span={3}>
            <span>#</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>Name</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Email</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Phone Number</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Garage Owner</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>status</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>actions</span>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          gutter={24}
          style={{
            height: 54,
            marginLeft: 2,
            marginRight: 2,
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <Col className="gutter-row" span={3}>
            <span>1</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>Nguyen</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>tvn@gmail.com</span>
          </Col>
<Col className="gutter-row" span={4}>
            <span>01204021</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>to van nguyen</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>active</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>
              <EyeOutlined />

              <EditOutlined
                style={{
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              />
              <DeleteOutlined />
            </span>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={24}>
          <Col className="gutter-row" span={19}></Col>
          <Col className="gutter-row" span={5}>
            <div>
              <Pagination defaultCurrent={1} total={30} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GarageManagementAll;\