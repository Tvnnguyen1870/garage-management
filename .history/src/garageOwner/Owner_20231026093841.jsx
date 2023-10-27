import { Button, Form, Input, Select, DatePicker } from 'antd';
const { Option } = Select;
export default function Owner() {
  return (
    <div>
      <h3>All Garage Owners</h3>

      <Form.Item name="gender" label="Gender">
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
    </div>
  );
}
