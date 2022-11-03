import React from "react";
import Control from "./control";
import Module from "../../../features/actions/modal/modal";
import Order from "../../../controller/order/order";
import { Data, InitialStates } from "../../../controller/types";
export default function controller(props: Data) {
  function _onClick(){

  }
  return (
    <div className="BuildControll">
      <Control
        ingr={props.activeData?.ingr !== undefined ? props.activeData.ingr : {}}
        loading={false}
        totalPrice={0}
        error={false}
        building={false}
        buying={false}
      />
    </div>
  );
}

