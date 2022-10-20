import React from "react";
import Control from "./control";
import Module from "../../../features/actions/modal/modal";
import Order from "../../../controller/order/order";
import { Data } from "../../../controller/types";
export default function controller(props: Data) {
  const renderOrder = (data: Data) => {
    return (
      <Module>
        <Order data={data} />
      </Module>
    );
  };
  return (
    <div className="BuildControll">
      <Control list={props.activeData?.ingr} />
      <div>
        <button type="submit" onClick={renderOrder(props)}>
          Order
        </button>
      </div>
    </div>
  );
}
