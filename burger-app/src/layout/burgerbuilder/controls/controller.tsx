import React from "react";
import Control from "./control";
import Module from "../../../features/actions/modal/modal";
import Order from "../../../controller/order/order";
import { Data, InitialStates } from "../../../controller/types";
export default function controller(props: Data) {
  const renderOrder = (data: InitialStates) => {
    return (
      <Module>
        <Order activeData={data} />
      </Module>
    );
  };
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
      <div>
        <button
          type="submit"
          className="button"
          onClick={() =>
            props.activeData !== undefined
              ? renderOrder(props.activeData)
              : undefined
          }
        >
          Order
        </button>
      </div>
    </div>
  );
}
