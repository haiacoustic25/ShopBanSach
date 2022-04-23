import { Layout } from './Pages/Layout';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Orders } from './Pages/Orders/Orders';
import { Products } from './Pages/Products/Products';
import { Users } from './Pages/Users/Users';

export const routes = [
  {
    path: 'admin',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'orders',
        element: <Orders />
      },
    ]
  }
];
