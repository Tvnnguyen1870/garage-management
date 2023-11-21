import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

function ownerNew() {
  const [owner, setOwner] = useState([]);

  useEffect(() => {
    const fetchOwner = async () => {
      const res = await axiosInstance.get('users');

      setOwner(res.data.data.items);

      // setPagination(res.data.data.pagination);
    };
    fetchOwner();
  }, []);
  console.log(owner);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
}
export default ownerNew();
