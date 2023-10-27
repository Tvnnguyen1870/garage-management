import { Button, Form, Input, Select, DatePicker } from 'antd';
const { Option } = Select;
export default function Owner() {
  return (
    <div>
      <h3>All Garage Owners</h3>

      <Form.Item name="gender" label="Gender">
        <Select placeholder=" status">
          <Option value="male">Active</Option>
          <Option value="female">Inactive</Option>
        </Select>
      </Form.Item>
    </div>
  );
}
