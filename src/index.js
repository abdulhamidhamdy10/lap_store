import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

  Link,
} from "react-router-dom";
import Allhome from "./Home/Allhome";
import Allapple from "./Apple/Allapple";
import Allhp from "./Hp/Allhp";
import Alldell from "./Dell/Alldell";
import Products from "./Api/Products";
import Cart from "./Api/Cart.jsx"
import Signup from "./Register/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Allhome/>,
  },
  {
    path: "/Apple",
    element: <Allapple/>,
  },
  {
    path: "/Hp",
    element: <Allhp/>,
  },
  {
    path: "/Dell",
    element: <Alldell/>,
  },
  {
    path: "/Products",
    element: <Products/>,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  },
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );






