import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

const ownerNew = () => {
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    const fetchOwners = async () => {
      const res = await axiosInstance.get('users');
      setOwners(res.data.data.items);
    };
    fetchOwners();
  }, []);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
};
export default ownerNew;
