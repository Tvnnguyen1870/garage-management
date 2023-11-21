import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOwners } from '../store/reducers/owner';

export default function NewOwner() {
  const { id } = useParams();
  console.log(id);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    if (id === 'create') return;
    const fetchOwners = async () => {
      const response = await axiosInstance.get('users');

      setOwner(response.data.data.items);
    };
  }, []);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
}
