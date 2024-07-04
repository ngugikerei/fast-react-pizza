import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home.jsx';
import Menu, { loader as menuLoader } from './features/menu/Menu.jsx';
import Cart from './features/cart/Cart.jsx';
import Error from './ui/Error.jsx';
import CreateOrder from './features/order/CreateOrder.jsx';
import Order from './features/order/Order.jsx';
import AppLayout from './ui/AppLayout.jsx';

//createBrowserRouter takes an array of objects
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },

      {
        path: '/order/:orderID',
        element: <Order />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
