import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from './components/layout/Mainlayout.jsx';
import Userdetails from './Userdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      
      {
        index: true, Component: App
      },

      {
        path: '/users/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component:Userdetails

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
