import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
export default function Owner() {
  const navigator = useNavigate();
  const hanldeOwner = () => {};
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
          {phoneBookStore.phonebooks.map((phonebook, index) => (
            <tr key={index}>
              <td>{phonebook.id}</td>
              <td>{phonebook.userName}</td>
              <td>{phonebook.phoneNumber}</td>
              <td>{phonebook.isFavorite.toString()}</td>
              <td>
                <button onClick={() => onRemove(phonebook.id)}>Remove</button>
                <button onClick={() => setPhonebook(phonebook)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
