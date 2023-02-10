import React from 'react';
import ReactDOM from 'react-dom/client';
import "animate.css/animate.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-slideshow-image/dist/styles.css'
import App from './App';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Beefs from "./components/HomePage/Products/Beefs/Beefs"
import Drinks from './components/HomePage/Products/Drinks/Drinks';
import Cake from './components/HomePage/Products/Cakes.jsx/Cakes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        children:[
          {
            path:"/",
            element:<Beefs/>
          },
          {
            path:"/drinks",
            element:<Drinks/>
          },
          {
            path:"/cake",
            element:<Cake/>
          },
        ]
      }
    ]
  },,
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);