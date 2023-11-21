import { useParams } from 'react-router-dom';

export default function NewOwner() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <div>
        <h1>Owner</h1>
      </div>
    </div>
  );
}
