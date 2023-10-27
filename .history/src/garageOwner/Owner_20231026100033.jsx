import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
export default function Owner() {
  const navigator = useNavigate();
  const hanldeOwner = () => {
    navigator('/Create');
  };
  return (
    <div>
      <h3>All Garage Owners</h3>

      <Button type="primary" onSubmit={hanldeOwner}>
        Add Owners
      </Button>

      <Form.Item name="status">
        <Select placeholder=" status">
          <Option value="male">Active</Option>
          <Option value="female">Inactive</Option>
        </Select>
      </Form.Item>
    </div>
  );
}
