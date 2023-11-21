import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

const OwnerNew = () => {
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    const fetchOwners = async () => {
      const res = await axiosInstance.get('users');
      setOwners(res.data.data.items);
    };
    fetchOwners();
  }, []);
  console.log(owners);
  return (
    <div>
      <div>
        <h1>Owner</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner) => (
              <tr></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OwnerNew;
