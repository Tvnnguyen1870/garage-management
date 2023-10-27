import { Button, Form, Input, Select, DatePicker } from 'antd';
const { Option } = Select;
export default function Owner() {
  return (
    <div>
      <h3>All Garage Owners</h3>

      <button
        type="submit"
        style={{ display: 'flex', width: '140px', padding: '12px 16px', alignItems: 'flex-start', gap: '8px' }}
      >
        Add owner
      </button>

      <Form.Item name="status">
        <Select placeholder=" status">
          <Option value="male">Active</Option>
          <Option value="female">Inactive</Option>
        </Select>
      </Form.Item>
    </div>
  );
}
