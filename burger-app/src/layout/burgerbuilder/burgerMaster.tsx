import React from "react";
import Controls from "./controls/controller";
import Visual from "./burger/visual";
import "./burger.css";
import { Data } from "../../controller/types";
const builder = (props: Data) => {
  function updateVisual(props: Data) {
    if (props.activeData?.ingr !== undefined) {
      return (
        <Visual
          ingr={props.activeData.ingr}
          loading={false}
          totalPrice={0}
          error={false}
          building={true}
          buying={false}
        />
      );
    } else {
      return null;
    }
  }
  return (
    <div className="builder">
      {updateVisual(props)}
      <Controls activeData={props.activeData} />
    </div>
  );
};
export default builder;
