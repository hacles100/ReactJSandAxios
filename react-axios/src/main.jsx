import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  createBrowserRouter,  RouterProvider } from "react-router-dom";

import './index.css';

// Paginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';


// configuracao do roteamento

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [

      // rota home
      {
        path: "/",
        element: <Home/>
      },

      // rota new post
      {
        path: "new",
        element: <NewPost/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
