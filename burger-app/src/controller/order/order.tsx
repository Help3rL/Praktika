import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app, db } from "../firebase/firebase_config";
import { Data, InitialStates, StaticIngrData, UserState } from "../types";
import "./orders.css";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
interface OrderFace {
  activeData: InitialStates;
  userData: UserState;
}
const Order = (props: OrderFace) => {
  function totalIngr(array: StaticIngrData | undefined) {
    let total: number = 0;
    if (array !== undefined) {
      Object.keys(array).forEach((ele: string) => {
        total += Number(array[ele][2]);
      });
      return total;
    }
    return 0;
  }
  async function registerOrder(arg: InitialStates) {
    if (localStorage.getItem("userData") !== null) {
      const rawUserData: string =
        localStorage.getItem("userData") === null
          ? ""
          : String(localStorage.getItem("userData"));
      const userData: User = JSON.parse(rawUserData);
      const database = getFirestore(app);
      database
        .collection("users")
        .doc(userData.uid)
        .update({
          orders: FieldValue.arrayUnion({
            ...arg
          }),
        });
    }
    return undefined;
  }
  function totalIngrCost(array: StaticIngrData, basecost: number | undefined) {
    if (array !== undefined && basecost !== undefined) {
      let total = basecost;
      Object.keys(array).forEach((ele: string) => {
        total += Number(array[ele][2]) * Number(array[ele][1]);
      });
      return (total / 100).toFixed(2);
    }
    return "Error";
  }
  const ingrGenerator = (array: StaticIngrData | undefined, data: Data) => {
    let hold: any = [];
    if (array !== undefined) {
      Object.keys(array).forEach((ele: string) => {
        hold.push(
          <tr>
            <th className="textToRight">{ele}</th>
            <td>{(Number(array[ele][1]) / 100).toFixed(2)}$</td>
            <td>{data.activeData?.ingr[ele][2]}</td>
            <td>
              {((Number(array[ele][2]) * array[ele][1]) / 100).toFixed(2)}???
            </td>
          </tr>
        );
      });
    }

    return hold;
  };
  return (
    <div className="order">
      <h3>Order information</h3>
      <p>
        Burger's base price:
        <span>{(props.activeData.basecost / 100).toFixed(2)}???</span>
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
            <tbody>{ingrGenerator(props.activeData.ingr, props)}</tbody>
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
                props.activeData.ingr !== undefined
                  ? props.activeData.ingr
                  : props.activeData.ingr,
                props.activeData.totalPrice
              )}
              ???
            </span>
          </p>
          <p>
            <strong>Sub Total:</strong>
            <span className="subTotal">
              {Number(
                totalIngrCost(
                  props.activeData.ingr !== undefined
                    ? props.activeData.ingr
                    : props.activeData.ingr,
                  props.activeData.totalPrice
                )
              ).toFixed(2)}
              ???
            </span>
          </p>
        </div>
      </div>
      <div className="addressForm">
        <h3>Delivery address</h3>
        <div className="address">
          <div className="input">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              defaultValue={
                props.userData?.userAddress !== undefined
                  ? props.userData.userAddress
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => registerOrder(props.activeData)}
      >
        Place order
      </button>
    </div>
  );
};
export default Order;
