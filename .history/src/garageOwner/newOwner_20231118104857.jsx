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
      const response = await axiosInstance.get(`${'users'}/${id}`);
      console.log(response);
      setOwners(response.data.data);
    };
    fetchOwners();
  }, []);

  console.log(44, owners);
  return (
    <div>
      <div>
        <form action="">
          <input type="text" placeholder="Name" value={owners.fullName} />
          <input type="text" placeholder="Email@gmail.com" value={owners.email} />
        </form>
      </div>
    </div>
  );
}
