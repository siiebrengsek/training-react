import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const privateRoute = ['/' , '/profile'];

function App() {

  useEffect(() => {
    const session = Cookies.get('session');
    console.log(session)
    if (!session && privateRoute.includes(window.location.pathname))  {
      window.location.href = '/login'
    } else if (session && !privateRoute.includes(window.location.pathname)) {
      window.location.href = '/'
    }
  },[]);

  return (
<RouterProvider router={router} />
  );
};

export default App
