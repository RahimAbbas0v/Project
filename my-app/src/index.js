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
import { Provider } from "react-redux";
import Home from './Pages/HomePage/Home';
import Beefs from "./components/Products/Beefs/Beefs";
import Drinks from './components/Products/Drinks/Drinks';
import Cake from './components/Products/Cakes.jsx/Cakes';
import Beefs2 from "./components/Products2/Beefs/Beefs"
import Drinks2 from './components/Products2/Drinks/Drinks';
import Cake2 from './components/Products2/Cakes.jsx/Cakes';
import About from './Pages/AboutPage/About';
import Menu from './Pages/MenuPage/Menu';
import Services from './Pages/ServicesPage/Services';
import Blog from './Pages/BlogPage/Blog';
import Contact from './Pages/ContactPage/Contact';
import Shop from './Pages/ShopPage/Shop';
import Coffes3 from "./components/Shop/Coffes3/Coffe"
import Drinks3 from "./components/Shop/Drinks3/Drinks"
import Beefs3 from "./components/Shop/Beefs3/Beefs"
import Cake3 from "./components/Shop/Cakes3/Cakes"
import Details from './Pages/DetailsPage/Details';
import Cart from './Pages/CartPage/Cart'
import Login from './Pages/LoginPage/Login';
import SignIn from './components/Login/Login'
import SignUp from './components/SignUp/SignUp';
import ResetPassword from './components/ResetPassword/ResetPassword';
import SwitchPanel from './components/SwitchPanel/SwitchPanel'
import Checkout from './Pages/CheckoutPage/Checkout'
import { store } from './config/Store';
import { PersistGate } from 'redux-persist/integration/react'
import Admin from './Pages/AdminPanelPage/Admin';
import AdminProduct from './components/AdminProduct/AdminProduct';
import { persistStore } from 'redux-persist';
import Profile from './components/UserProfile/Profile';
let persistor = persistStore(store)
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
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/menu/",
        element: <Menu/>,
        children:[
          {
            path:"/menu/",
            element:<Beefs2/>
          },
          {
            path:"menu/drinks2",
            element:<Drinks2/>
          },
          {
            path:"menu/cake2",
            element:<Cake2/>
          },
        ]
      },
      {
        path: "/services",
        element: <Services/>
      }
      ,{
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/shop",
        element: <Shop/>,
        children:[
          {
            path:"/shop/",
            element:<Beefs3/>
          },
          {
            path:"shop/drinks",
            element:<Drinks3/>
          },
          {
            path:"shop/cake",
            element:<Cake3/>
          },
          {
            path:"shop/coffes",
            element:<Coffes3/>
          },
        ]
      },
      {
        path: "/details",
        element: <Details/>,
      },
      {
        path: "/details/:Id",
        element: <Details/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/User",
        element: <Profile/>
      },
     
      {
        path: "/login",
        element: <Login/>,
        children:[
          {
            path: "/login",
            element: <SignIn/>
          }, 
          {
        path: "/login/resetpassword",
        element: <ResetPassword/>
          },
          {
            path: "/login/signup",
            element: <SignUp/>
          },
        ]
      },
    ]
  },{
        path: "/Admin",
        element: <SwitchPanel/>,
      },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <RouterProvider router={router} />
  </PersistGate>
  </Provider>
  
);
