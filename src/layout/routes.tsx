import { AuthForm } from '../tasks';
import { Navigate } from 'react-router-dom';

interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const routes: IRoute[] = [
  {
    path: '/authform',
    element: <AuthForm />,
  },
  {
    path: '/',
    element: <Navigate to="/authform" replace />,
  },
];
