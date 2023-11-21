import { useEffect, useState } from 'react';
import axiosInstance from '../services/axios.service';

export default function ownerNew() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      const response = await axiosInstance.get('users', {
        params: query,
      });

      setOwners(response.data.data.items);

      setPagination(response.data.data.pagination);
    };
  });
  return;
}
