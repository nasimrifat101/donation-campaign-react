import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donation from './components/Donation/Donation';
import Statistcs from './components/Statistcs/Statistcs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:  [
      {
        path:'/details',
        element:<DonationDetails></DonationDetails>
      },
      {
        path: '/donation',
        element:<Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistcs></Statistcs>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
