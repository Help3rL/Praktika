import { each } from "immer/dist/internal";
import React from "react";
import { Data, StaticIngrData } from "../types";

const Order = (props: Data) => {
  function totalIngr(array: StaticIngrData | undefined) {
    let total: number = 0;
    if (array !== undefined) {
      Object.keys(array).forEach((ele: string) => {
        console.log(array[ele][2]);
        total += Number(array[ele][2]);
      });
      return total;
    }
    return 0;
  }
  function totalIngrCost(
    array: StaticIngrData | undefined,
    basecost: number | undefined
  ) {
    if (array !== undefined && basecost !== undefined) {
      let total = basecost;
      Object.keys(array).forEach((ele: string) => {
        console.log(array[ele][2]);
        total += Number(array[ele][2]) * Number(array[ele][1]);
      });
      return (total / 100).toFixed(2);
    }
    return "Error";
  }
  const ingrGenerator = (array: StaticIngrData, data: Data) => {
    let hold: any = [];
    Object.keys(array).forEach((ele: string) => {
      return (
        <tr>
          <th className="textToRight">{ele}</th>
          <td>{(Number(array[ele][1]) / 100).toFixed(2)}$</td>
          <td>{data.activeData?.ingr[ele][2]}</td>
          <td>{array[ele[1]]}$</td>
        </tr>
      );
    });
    return hold;
  };
  return (
    <div className="order">
      <h3>Order information</h3>
      <p>
        Burger's base price:<span>{"4.00$"}</span>
      </p>
      <div className="information">
        <div className="ingredients">
          <table>
            <thead>
              <tr>
                <th className="textToRight">Name</th>
                <th>Price(per one)</th>
                <th>Amount</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {props.activeData?.ingr !== undefined ? (
                ingrGenerator(props.activeData?.ingr, props)
              ) : (
                <tr>
                  <th>Table is empty</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="total">
          <p>
            Total ingredients:{" "}
            <span className="totalIngr">
              {totalIngr(
                props.activeData?.ingr !== undefined
                  ? props.activeData.ingr
                  : undefined
              )}
            </span>
          </p>
          <p>
            Total ingredients cost:{" "}
            <span className="cost">
              {totalIngrCost(
                props.activeData?.ingr !== undefined
                  ? props.activeData.ingr
                  : undefined,
                props.activeData?.totalPrice
              )}
              $
            </span>
          </p>
          <p>
            Delivery cost:{" "}
            <span className="deliveryCost">
              {(Number(props.activeData?.DeliveryCost) / 100).toFixed(2)}$
            </span>
          </p>
          <p>
            <strong>Sub Total:</strong>
            <span className="subTotal">
              {(Number(totalIngrCost(
                  props.activeData?.ingr !== undefined
                    ? props.activeData.ingr
                    : undefined,
                  props.activeData?.totalPrice
                )) + (Number(props.activeData?.DeliveryCost) / 100)).toFixed(2)}
              $
            </span>
          </p>
        </div>
      </div>
      <div className="addressForm">
        <h3>Delivery address</h3>
        <div className="address">
          <div className="input">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              defaultValue={props.userData?.userAddress}
            />
          </div>
        </div>
      </div>
      <button type="submit">Place order</button>
    </div>
  );
};
export default Order;
