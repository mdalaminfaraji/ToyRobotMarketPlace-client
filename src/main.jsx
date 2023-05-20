import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './MainLayout/Main.jsx';
import Home from './Home/Home/Home.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import AllToys from './AllToys/AllToys/AllToys.jsx';
import AddAToy from './AllToys/AddAToy/AddAToy.jsx';
import MyToys from './AllToys/MyToys/MyToys.jsx';
import Blogs from './Blogs/Blogs.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import ViewDetails from './Shared/ViewDetails/ViewDetails.jsx';
import Update from './Update/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path:'/all-toys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('http://localhost:5000/toyRobots/')
        
      },
      {
        path:'/addAToy',
        element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path:'/myToys',
        element:<MyToys></MyToys>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/viewDetails/:_id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/toyRobots/${params._id}`)
      },
      {
            path:'/update/:id',
            element:<Update></Update>,
            loader:({params})=>fetch(`http://localhost:5000/toyRobots/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
  </AuthProviders>
  
)
