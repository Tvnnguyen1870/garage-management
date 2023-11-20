import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

export default function ownerNew() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwner = async () => {
      const res = await axiosInstance.get('users');

      setOwners(res.data.data.items);

      // setPagination(res.data.data.pagination);
    };
  }, []);
  return;
}
