import * as React from "react";
import Orders from '../../controls/order/orders'
import { Route, Router, Routes } from "react-router";

const orderData = [
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
  ]

export default function account() {
  return (
    <div className="account">
      <Router>
        <Routes>
          <Route path="/account/profile" />
          <Route path="/account/friends" />
          <Route path="/account/settings" />
          <Route
            path="/orders"
            element={<Orders orderData={orderData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
