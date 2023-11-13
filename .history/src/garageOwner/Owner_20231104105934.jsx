// import { Button, Select, Space, Table, Card, Input } from 'antd';
// import Search from 'antd/lib/input/Search';
// const { Option } = Select;
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteOwner, fetchOwners } from '../store/reducers/Owner';
// import { Link, useNavigate } from 'react-router-dom';

// const Owner = () => {
//   // const [params, setParams] = useState({
//   //   page: 1,
//   //   limit: 2,
//   // });
//   // const navigate = useNavigate();
//   // const dispatch = useDispatch();
//   // const { manageOwner } = useSelector((state) => state.owner);

//   // const handleAdd = () => {
//   //   navigate('/create');
//   // };
//   // useEffect(() => {
//   //   dispatch(fetchOwners(params));
//   // }, [params]);
//   // const handleDelete = (id) => {
//   //   dispatch(deleteOwner(id));
//   // };
//   const [query, setQuery]= useState({
//     page:1,
//     limit: 10,
//     name:"",
//     email:"",
//     status: "",
//   })
//   const columns = [
//     {
//       title: '#',
//       key: 'id',
//       dataIndex: 'id',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'fullName',
//       key: 'fullName',
//       render: (text) => <Link>{text}</Link>,
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Phone number',
//       dataIndex: 'phoneNumber',
//       key: 'phoneNumber',
//     },

//     {
//       title: 'Action',
//       key: 'action',
//       render: () => (
//         <Space size="middle">
//           <Link to="/create">Update</Link>
//           <Link onClick={handleDelete}>Delete</Link>
//         </Space>
//       ),
//     },
//   ];
//   const data = manageOwner?.items;
//   const pagination = manageOwner?.pagination;
//   console.log(pagination);

//   const onSearch = (value) => {
//     setParams({ ...params, name: value });
//   };

//   const onTableChange = (pagination) => {
//     setParams({ ...params, page: pagination.current, limit: pagination.pageSize });
//   };
//   const [filter, setFilter] = useState('');
//   const onFilterTypeChange = (value) => {
//     setFilter(value);
//   };

//   console.log(222, filter);

//   if (!manageOwner) return;

//   return (
//     <Card style={{ margin: '32px' }}>
//       <div>
//         <div className="title-container" style={{ display: 'flex', marginBottom: '24px' }}>
//           <h2>All Garage Owners</h2>
//           <Button onClick={handleAdd}>Add Owner</Button>
//         </div>
//         <div className="owner-list-content" style={{ marginBottom: '24px' }}>
//           <Space.Compact className="search-content">
//             <Select
//               defaultValue="name"
//               options={[
//                 {
//                   label: 'Name',
//                   value: 'name',
//                 },
//                 {
//                   label: 'Email',
//                   value: 'email',
//                 },
//               ]}
//               onChange={onFilterTypeChange}
//             />
//             <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
//           </Space.Compact>
//         </div>
//         <div>
//           <Table
//             rowKey="id"
//             columns={columns}
//             dataSource={data}
//             pagination={
//               {
//                 // // current: pagination.page,
//                 // pageSize: pagination.limit,
//                 // total: pagination.total,
//               }
//             }
//             onChange={onTableChange}
//           />
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default Owner;

import { Button, Input, Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

const Owners = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      render: (value) => (
        <div
          style={{
            textTransform: 'lowercase',
          }}
        >
          {value}
        </div>
      ),
    },
  ];

  const [query, setQuery] = useState({
    page: 1,
    limit: 2,
    name: '',
    email: '',
    status: '',
  });

  const [owners, setOwners] = useState([]);
  const [pagination, setPagination] = useState({});
  const [type, setType] = useState('name');
  const [value, setValue] = useState('');

  const fetchOwners = async () => {
    const response = await axiosInstance.get('/users', {
      params: query,
    });

    setOwners(response.data.data.items);
    setPagination(response.data.data.pagination);
  };

  const onTableChange = (values) => {
    setQuery({ ...query, page: values.current });
  };

  const handleTypeChange = (value) => {
    setType(value);
  };

  const onInputChange = (event) => {
    const value = event.target.value;

    setValue(value);
  };

  const onSearch = () => {
    if (type === 'name') {
      setQuery({ ...query, name: value });
    } else {
      setQuery({ ...query, email: value });
    }
  };

  useEffect(() => {
    // call API
    fetchOwners();
  }, [query]);

  return (
    <div>
      <Select
        defaultValue={type}
        style={{ width: 120 }}
        onChange={handleTypeChange}
        options={[
          { value: 'name', label: 'Name' },
          { value: 'email', label: 'Email' },
        ]}
      />
      <Input value={value} onChange={onInputChange} />
      <Button onClick={onSearch}>Search</Button>
      <Table
        rowKey="id"
        dataSource={owners}
        columns={columns}
        pagination={{
          current: pagination.page,
          pageSize: pagination.limit,
          total: pagination.total,
        }}
        onChange={onTableChange}
      />
    </div>
  );
};
export default Owners;
