import { AuthForm, ObjectEquality } from '../tasks';
import { Navigate } from 'react-router-dom';

export interface IRoute {
  path: string;
  element: React.ReactNode;
  name?: string;
}

export const routes: IRoute[] = [
  {
    path: '/authform',
    element: <AuthForm />,
    name: 'Task 1 - Authorization form',
  },
  {
    path: '/objectqequality',
    element: <ObjectEquality />,
    name: 'Task 2 - Object equality',
  },
  {
    path: '/',
    element: <Navigate to="/authform" replace />,
  },
];
