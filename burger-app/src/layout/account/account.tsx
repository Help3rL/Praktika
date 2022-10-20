import * as React from "react";
import Orders from "../../controller/order/orders";
import { Route, Routes, Outlet } from "react-router";
import { createBrowserRouter, Link } from "react-router-dom";
import ErrorPage from "../errorPage";
import "./account.css";
import { Data } from "../../controller/types";
import Loader from "../loader/loader";
let data: Data = {
  orderData: {
    ingrName: { patty: ["patty", 51, 60], cheese: ["cheese", 60, 55] },
    orderCost: 0,
    paid: false,
    id: 0,
    amount: 0,
    date: new Date(),
  },

  activeData: {
    loading: false,
    ingr: {},
    totalPrice: 0,
    error: false,
    building: false,
    buying: false,
  },

  userData: {
    userName: "",
    userSurname: "",
    userAddress: "",
    userZip: 0,
    userEmail: "",
    userOrders: [
      {
        ingrName: { patty: ["patty", 51, 60], cheese: ["cheese", 60, 55] },
        orderCost: 0,
        paid: false,
        id: 0,
        amount: 0,
        date: new Date(),
      },
    ],
    userCity: "",
    userToken: "",
    userPhoneNumber: 0,
    userlogoutTime: 0,
    userLogState: false,
    uid: "",
  },
};
if (data.userData !== undefined) {
  data.userData.userOrders = [
    {
      ingrName: {
        patty: ["patty", 150, 3],
        cheese: ["cheese", 510, 4],
        lettuce: ["lettuce", 165, 2],
        bacon: ["bacon", 6514, 8],
      },
      orderCost: 5000,
      paid: true,
      id: 498,
      amount: 3,
      date: new Date(),
    },
    {
      ingrName: {
        patty: ["patty", 150, 9],
        cheese: ["cheese", 510, 6],
        lettuce: ["lettuce", 165, 8],
        bacon: ["bacon", 6514, 5],
      },
      orderCost: 5000,
      paid: true,
      id: 498,
      amount: 3,
      date: new Date(),
    },
  ];
}
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
        element: <Orders orderData={data.orderData} />,
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
              element={<Orders orderData={data.orderData} />}
              errorElement={<ErrorPage />}
            />
          </Route>
        </Routes>
        {/* </Router> */}
      </div>
      <div className="accountContent">
        <Outlet />
      </div>
    </div>
  );
}
