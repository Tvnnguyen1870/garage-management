import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function NewOwner() {
  const { id } = useParams();
  console.log(id);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    if (id === 'create') return;
  }, []);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
}
