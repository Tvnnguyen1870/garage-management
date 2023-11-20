import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

export default function ownerNew() {
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
  return;
}
