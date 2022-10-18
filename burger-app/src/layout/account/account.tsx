import * as React from "react";
import Orders from "../../controls/order/orders";
import { Route, Routes } from "react-router";
import { createBrowserRouter, Link } from "react-router-dom";
import ErrorPage from "../errorPage";
import "./account.css";
import { Data } from "../../controls/types";
import Loader from '../loader/loader'
let data: Data = {
  orderData: [],
  userData: "",
};
data.orderData = [
  {
    ingrName: [
      { name: "patty", amount: 1 },
      { name: "cheese", amount: 2 },
      { name: "lettuce", amount: 3 },
      { name: "tomato", amount: 4 },
    ],
    orderCost: 5000,
    paid: true,
    id: 498,
    amount: 3,
    date: new Date(),
  },
  {
    ingrName: [
      { name: "patty", amount: 1 },
      { name: "cheese", amount: 2 },
      { name: "lettuce", amount: 3 },
      { name: "tomato", amount: 4 },
    ],
    orderCost: 5000,
    paid: true,
    id: 498,
    amount: 3,
    date: new Date(),
  },
];
async function Loadering(waitFor:any) {
  
}
const accountRouting = createBrowserRouter([
  {
    path: '/account',
    element: 'a',
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/account/profile",
              element: "a",
              errorElement: <ErrorPage />,
      },
      {
        path:"/account/friends",
              element:"b",
              errorElement: <ErrorPage />
      },
      {
        path: "/account/settings",
              element:"c",
              errorElement: <ErrorPage />
      },
      {
        path:"/account/orders",
        element: <Orders orderData={data.orderData} userData={""} />,
        errorElement: <ErrorPage />,
      }
    ]
  }
])

function AccountNav() {
  return (
    <nav className="account">
      <ul>
        <li className="NavLink">
          <Link to="/account/profile">Profile</Link>
        </li>
        <li className="NavLink">
          <Link to="/account/orders">Orders</Link>
        </li>
        <li className="NavLink">
          <Link to="/account/friends">Friends</Link>
        </li>
        <li className="NavLink">
          <Link to="/account/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
export default function Account() {
  return (
    <div className="account">
      <div className="accountNav">
        <AccountNav/>
        <Routes>
          
          <Route path="/account">
            <Route
              path="/account/profile"
              element="a"
              errorElement={<ErrorPage />}
            />
            <Route
              path="/account/friends"
              element="b"
              errorElement={<ErrorPage />}
            />
            <Route
              path="/account/settings"
              element="c"
              errorElement={<ErrorPage />}
            />
            <Route
              path="/account/orders"
              element={<Orders orderData={data.orderData} userData={""} />}
              errorElement={<ErrorPage />}
            />
          </Route>
        </Routes>
      </div>
      <div className="accountContent">Random</div>
    </div>
  );
}
