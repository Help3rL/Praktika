import React from "react";
import Control from "./control";
import Module from "../../../features/actions/modal/modal";
import Order from "../../../controller/order/order";
import { activeProps, Data } from "../../../controller/types";
export default function controller(props: Data) {
  // const renderOrder = (data: Data) => {
  //   return (
  //     <Module>
  //       <Order activeData={data.activeData} />
  //     </Module>
  //   );
  // };
  function sendData(vrir: activeProps) {
    return undefined;
  }
  return (
    <div className="BuildControll">
      <Control list={props.activeData?.ingr} />
      <div>
        <button
          type="submit"
          onClick={
            props.activeProps?.sendSubmit !== undefined
              ? sendData(props.activeProps)
              : undefined
          }
        >
          Order
        </button>
      </div>
    </div>
  );
}
