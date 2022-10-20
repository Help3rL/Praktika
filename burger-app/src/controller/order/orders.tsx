import { database } from "firebase-admin";
import React from "react";
import { Data, order, StaticIngrData, UserState } from "../types";
import "./orders.css";
const UserOrders = (props: Data) => {
  const orderIngredients = (ingr: StaticIngrData) => {
    let held: Array<any> = [];
    let keyhold = Object.keys(ingr);
    keyhold.forEach((element) => {
      let selement = ingr.element;
      held.push(
        <li>
          {selement[0]}
          {selement[2]}
        </li>
      );
    });
    return held;
  };
  const orderReader = (data: UserState) => {
    console.log(data);
    let holder: Array<any> = [];
    if (data !== undefined) {
      data.userOrders.forEach((element) => {
        holder.push(
          <tr>
            <th>{element.id}</th>
            <td>
              {element.date.getUTCFullYear()}-
              {element.date.getMonth().toLocaleString("en-GB", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
              -
              {element.date.getDate().toLocaleString("en-GB", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </td>
            <td>
              <ol>{orderIngredients(element.ingrName)}</ol>
            </td>
            <td>{(element.orderCost / 100).toFixed(2)}</td>
            <td>{element.amount}</td>
            <td>{((element.orderCost * element.amount) / 100).toFixed(2)}</td>
          </tr>
        );
      });
    }
    return holder;
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
          {props.userData !== undefined
            ? orderReader(props.userData)
            : undefined}
        </tbody>
      </table>
    </div>
  );
};
export default UserOrders;
