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
import Profile from './Pages/User/Profile.jsx';
import ChangePassword from './Pages/User/ChangePassword.jsx';
import SocialLink from './Pages/Setting/SocialLink.jsx';
import AddProducts from './Pages/Products/AddProducts.jsx';
import AddMenubar from './Pages/Menu/AddMenubar.jsx';
import AllProducts from './Pages/Products/AllProducts.jsx';
import Order from './Pages/OrderDetails/Order.jsx';
import OrderDetails from './Pages/OrderDetails/OrderDetails.jsx';
import HeaderContent from './Pages/Content/HeaderContent.jsx';
import HistorySection from './Pages/Content/HistorySection.jsx';
import TopHeader from './Pages/Content/TopHeader.jsx';
import CustomerSupport from './Pages/Others/CustomerSupport.jsx';
import AdminUser from './Pages/User/AdminUser.jsx';
import CustomerMessageDetails from './Pages/Others/CustomerMessageDetails.jsx';
import Login from './Pages/User/Login.jsx';
import Register from './Pages/User/Register.jsx';
import AddUser from './Pages/User/AddUser.jsx';

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
        path:'/login', 
        element:<Login></Login>
      },
      {
        path:'/register', 
        element:<Register></Register>
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
            path:'/social-link',
            element:<SocialLink></SocialLink>
          }

        ]
      }
      ,
      {
        path:'/all-products',
        element:<AllProducts></AllProducts>
      }
      ,
      {
        path:'/add-products',
        element:<AddProducts></AddProducts>
      }
      ,
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/order/:id',
        element:<OrderDetails></OrderDetails>
      }
      ,
      {
        path:'/add-menubar',
        element:<AddMenubar></AddMenubar>
      }
      ,
      {
        path:'/header-content',
        element:<HeaderContent></HeaderContent>
      }
      ,
      {
        path:'/history-section',
        element:<HistorySection></HistorySection>
      }
      ,
      {
        path:'/top-header-content',
        element:<TopHeader></TopHeader>
      }
      ,
      {
        path:'/customer-support',
        element:<CustomerSupport></CustomerSupport>
      }
      ,
      {
        path:'/customer-support/:id',
        element:<CustomerMessageDetails></CustomerMessageDetails>
      }
      ,
      {
        path:'/admin-user',
        element:<AdminUser></AdminUser>
      }
      ,
      {
        path:'/add-user',
        element:<AddUser></AddUser>
      }
      ,
      {
        path:'review',
        element:<Review></Review>
      }
      
    ],
    
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
