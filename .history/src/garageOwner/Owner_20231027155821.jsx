import { Button, Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
export default function Owner() {
  const ownerStore = useSelector((state) => state.owner);
  const navigator = useNavigate();
  const hanldeAddOwner = () => {};
  return (
    <div>
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

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ownerStore.owners.map((owner, index) => (
            <tr key={index}>
              <td>{owner.id}</td>
              <td>{owner.userName}</td>
              <td>{owner.email}</td>
              <td>{owner.phoneNumber}</td>
              <td>{owner.status}</td>
              <td>
                <Button.DeleteOutlined />
                <Button.EditOutlined />
                <Button.EyeOutlined />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
