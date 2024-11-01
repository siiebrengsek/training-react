import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {

  useEffect(() => {
    const session = Cookies.get('session');
    console.log(session)
    if (session) {
      Navigate('/')
    };
  },[]
);

  return (
<RouterProvider router={router} />
  );
};

export default App
