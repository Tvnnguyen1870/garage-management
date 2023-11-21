import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

function ownerNew() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      const res = await axiosInstance.get('users');

      setOwners(res.data.data.items);

      // setPagination(res.data.data.pagination);
    };
    fetchOwners();
  }, []);
  console.log(owners);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
}
export default ownerNew();
