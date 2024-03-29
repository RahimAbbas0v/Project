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
import About from './Pages/AboutPage/About';
import Menu from './Pages/MenuPage/Menu';
import Services from './Pages/ServicesPage/Services';
import Blog from './Pages/BlogPage/Blog';
import Contact from './Pages/ContactPage/Contact';
import Shop from './Pages/ShopPage/Shop';
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
import { persistStore } from 'redux-persist';
import Profile from './components/UserProfile/Profile';
import Customers from "./Pages/Customers/index"
import Dashboard from './Pages/Dashbaord';
import Orders from './Pages/Orders/index'
import Inventory from "./Pages/Inventory/index"
import AddPage from './Pages/AddPage/AddPage';
import ProductViewPage from './Pages/ProductViewPage/ProductViewPage';
import EditProductPage from './Pages/EditProductPage/EditProductPage';
import CustomerEdit from './Pages/CustomersEdit/CustomersEdit';
import UserView from './Pages/UserViewPage/UserViewPage'
import Reservations from './Pages/Reservations/Reservations';
import Requests from "./Pages/ContactRequests/Requests"
let persistor = persistStore(store)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/menu/",
        element: <Menu />,
      },
      {
        path: "/services",
        element: <Services />
      }
      , {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/details",
        element: <Details />,
      },
       {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/details/:Id",
        element: <Details />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/User",
        element: <Profile />
      },

      {
        path: "/login",
        element: <Login />,
        children: [
          {
            path: "/login",
            element: <SignIn />
          },
          {
            path: "/login/resetpassword",
            element: <ResetPassword />
          },
          {
            path: "/login/signup",
            element: <SignUp />
          },
        ]
      },
    ]
  },
  {
    path: "/Admin",
    element: <SwitchPanel />,
    children: [
      {
        path: "/Admin/",
        element: <Dashboard />,
      },
      {
        path: "/Admin/customers",
        element: <Customers />,
      },
      {
        path: "/Admin/reservations",
        element: <Reservations />,
      },
      {
        path: "/Admin/orders",
        element: <Orders />,
      },
      {
        path: "/Admin/products",
        element: <Inventory />,
      },
      {
        path: "/Admin/Addproducts",
        element: <AddPage/>,
      },
      {
        path: "/Admin/requests",
        element: <Requests/>,
      },
      {
        path: "/Admin/details",
        element: <ProductViewPage/>,
      },
      {
        path: "/Admin/details/:Id",
        element: <ProductViewPage/>,
      },
      {
        path: "/Admin/edit",
        element: <EditProductPage/>,
      },
      {
        path: "/Admin/edit/:Id",
        element: <EditProductPage/>,
      },
      {
        path: "/Admin/useredit",
        element: <CustomerEdit/>,
      },
      {
        path: "/Admin/useredit/:Id",
        element: <CustomerEdit/>,
      },
      {
        path: "/Admin/userView",
        element: <UserView/>,
      }, 
      {
        path: "/Admin/userView/:Id",
        element: <UserView/>,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>

);
