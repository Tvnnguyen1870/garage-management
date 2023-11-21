import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axiosInstance from '../services/axios.service';

export default function NewOwner() {
  const { id } = useParams();
  console.log(id);
  const [owners, setOwners] = useState({});

  useEffect(() => {
    if (id === 'create') return;
    const fetchOwners = async () => {
      const response = await axiosInstance.get('users');

      setOwners(response.data.data.items);
    };
    fetchOwners();
  }, []);

  console.log(44, owners);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
}
