import { useParams } from 'react-router-dom';

export default function NewOwner() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
}
