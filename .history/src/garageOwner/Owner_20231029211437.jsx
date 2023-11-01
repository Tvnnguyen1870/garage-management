import { Button, Form, Select } from 'antd';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {DeleteOutlined, EditOutlined ,EyeOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Option } = Select;
export default function Owner() {
  // const ownerStore = useSelector((state) => state.owner);
  // const navigator = useNavigate();
  const hanldeAddOwner = () => {};
  return (
    <div>
      <Card>
        <h3>All Garage Owners</h3>

        <Button type="primary" onSubmit={hanldeAddOwner}>
          Add Owners
        </Button>

        <Form.Item name="status">
          <Select placeholder=" status">
            <Option value="male">Active</Option>
            <Option value="female">Inactive</Option>
          </Select>
        </Form.Item>
      </Card>
    </div>
  );
}
