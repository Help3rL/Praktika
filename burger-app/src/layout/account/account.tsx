import * as React from "react";
import Orders from "../../controller/order/orders";
import { Route, Routes, Outlet } from "react-router";
import { createBrowserRouter, Link } from "react-router-dom";
import ErrorPage from "../errorPage";
import "./account.css";
import { Data } from "../../controller/types";
import Loader from "../loader/loader";
let data: Data = {
  orderData: [],
  activeData: {
    loading: false,
    ingr: [],
    totalPrice: 0,
    error: false,
    building: false
  }
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
const accountRouting = createBrowserRouter([
  {
    path: "/account",
    element: "a",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/account/profile",
        element: "a",
        errorElement: <ErrorPage />,
      },
      {
        path: "/account/friends",
        element: "b",
        errorElement: <ErrorPage />,
      },
      {
        path: "/account/settings",
        element: "c",
        errorElement: <ErrorPage />,
      },
      {
        path: "/account/orders",
        element: <Orders orderData={data.orderData}/>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function AccountNav() {
  return (
    <nav className="account">
      <ul>
        <Link to="/account/profile">
          <li className="NavLink">Profile</li>
        </Link>
        <Link to="/account/orders">
          <li className="NavLink">Orders</li>
        </Link>
        <Link to="/account/friends">
          <li className="NavLink">Friends</li>
        </Link>
        <Link to="/account/settings">
          <li className="NavLink">Settings</li>
        </Link>
      </ul>
    </nav>
  );
}
export default function Account() {
  return (
    <div className="account">
      <div className="accountNav">
        {/* <Router location={accountRouting}> */}
        <AccountNav />
        <Routes location={accountRouting}>
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
              element={<Orders orderData={data.orderData}/>}
              errorElement={<ErrorPage />}
            />
          </Route>
        </Routes>
        {/* </Router> */}
      </div>
      <div className="accountContent">
        <Outlet/>
      </div>
    </div>
  );
}
