import { database } from "firebase-admin";
import React from "react";
import { orderData, ingrData} from "../types";
import "./orders.css";
const UserOrders = (props: orderData) => {
  const orderIngredients = (ingr: Array<ingrData>) => {
    let held: Array<any> = [];
    ingr.forEach((element: ingrData) => {
      held.push(
        <li>
          {element.name}
          {element.amount}
        </li>
      );
    });
    return held;
  };
  const orderReader = (data:orderData) => {
    let holder:Array<any> = [];
    data.orderData.forEach(element => {
        holder.push(
            <tr>
                <th>{element.id}</th>
                <td>
                {element.date.getUTCFullYear()}-
                {element.date
                    .getMonth()
                    .toLocaleString("en-GB", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                    })}
                -
                {element.date
                    .getDate()
                    .toLocaleString("en-GB", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                    })}
                </td>
                <td>
                <ol>{orderIngredients(element.ingrName)}</ol>
                </td>
                <td>{(element.orderCost / 100).toFixed(2)}</td>
                <td>{element.amount}</td>
                <td>
                {((element.orderCost * element.amount) / 100).toFixed(
                    2
                )}
                </td>
            </tr>
        )
    });
    return holder
  };
  return (
    <div className="orders">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order date</th>
            <th>Ingredients</th>
            <th>Cost</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            {orderReader(props)}
        </tbody>
      </table>
    </div>
  );
};
export default UserOrders;
