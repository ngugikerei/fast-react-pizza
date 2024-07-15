import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home.jsx';
import Menu, { loader as menuLoader } from './features/menu/Menu.jsx';
import Cart from './features/cart/Cart.jsx';
import Error from './ui/Error.jsx';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder.jsx';
import Order, { loader as orderLoader } from './features/order/Order.jsx';
import AppLayout from './ui/AppLayout.jsx';

//createBrowserRouter takes an array of objects
//the aray objects are the routes
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
        action: createOrderAction,
      },

      {
        path: '/order/:orderID',
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
