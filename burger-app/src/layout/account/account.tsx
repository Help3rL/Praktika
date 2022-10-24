import * as React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./account.css";

export function AccountNav() {
  return (
    <div className="accountNav">
      <nav className="account">
        <ul>
          <Link to="/account/profile">
            <li className="NavLink">Profile</li>
          </Link>
          <Link to="/account/orders">
            <li className="NavLink">Orders</li>
          </Link>
          {/* <Link to="/account/friends">
            <li className="NavLink">Friends</li>
          </Link> */}
          {/* <Link to="/account/settings">
            <li className="NavLink">Settings</li>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
}
export default function Account() {
  return (
    <div className="account">
      <AccountNav />
      <div className="accountContent">
        <Outlet />
      </div>
    </div>
  );
}
export function OrdersVisual() {
  return(
    <div className="orders">
        <h1>Random content</h1>
        <p>woho</p>
    </div>
  )
}