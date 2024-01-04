import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Home from './Pages/Home.jsx';
import Setting from './Pages/Setting.jsx';
import SettingHome from './Pages/Setting/SettingHome.jsx';
import Review from './Pages/Review.jsx';
import Privacy from './Pages/Setting/Privacy.jsx';
import Contact from './Pages/Setting/Contact.jsx';
import Profile from './Pages/User/Profile.jsx';
import ChangePassword from './Pages/User/ChangePassword.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/', 
        element:<Home></Home>
      },
      {
        path:'/profile', 
        element:<Profile></Profile>
      },
      {
        path:'/change-password', 
        element:<ChangePassword></ChangePassword>
      },
      {
        path:'/',
        element:<Setting></Setting>,
        children:[
          {
            path:'/setting/',
            element:<SettingHome></SettingHome>
          },
          {
            path:'/privacy',
            element:<Privacy></Privacy>
          }
          ,
          {
            path:'/contact',
            element:<Contact></Contact>
          }
        ]
      }
      ,
      {
        path:'review',
        element:<Review></Review>
      }
      
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
