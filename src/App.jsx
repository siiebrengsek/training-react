import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Register from './pages/Register';
import HomeRoot from './pages/HomeRoot';
import Error from './pages/Error';
import Profile from './pages/Profile';
import Setting from './pages/Setting';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <HomeRoot />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

const privateRoute = ['/' , '/profile'];

function App() {

  useEffect(() => {
    const session = Cookies.get('session');
    console.log(session)
    // if (!session && privateRoute.includes(window.location.pathname))  {
    //   window.location.href = '/login'
    // } else if (session && !privateRoute.includes(window.location.pathname)) {
    //   window.location.href = '/'
    // }
  },[]);

  return (
    <RouterProvider router={router} />
  );
};

export default App
