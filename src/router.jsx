import { createBrowserRouter } from 'react-router-dom';
import LayOut from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
  },
]);

export default router;
