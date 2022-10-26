import React from "react";
import { InitialStates, StaticIngrData } from "../../../controller/types";
let hold = 1;
export default function control(props: InitialStates) {
  const holdd = (action: string, ingrName: string) => {
    if (action === "Add" && hold < 100) {
      hold++;
      let hart = props.ingr[ingrName][2];
      props.ingr[ingrName][2] = hart !== undefined ? hart + 1 : undefined;
      console.log("test++" + props.ingr[ingrName][2]);
    } else if (action === "Substract" && hold > 0) {
      hold--;
      let hart = props.ingr[ingrName][2];
      props.ingr[ingrName][2] = hart !== undefined ? hart - 1 : undefined;
      console.log("test" + props.ingr[ingrName][2]);
    } else {
      console.debug("MAX/MIN" + hold);
    }

  };

  const rerender = () => {
    return undefined;
  };
  function buttonClick(ark0: string, arg1: string, arg2?: string) {
    holdd(ark0, arg1);
    rerender();
    return undefined;
  }
  const generator = (hen: StaticIngrData) => {
    console.debug(hen);
    const tempHold = [];
    for (const [key, value] of Object.entries(hen)) {
      tempHold.push(
        <div key={key + value} className="controlContainer">
          <label htmlFor="buttons" className="Label">
            {key}:{(Number(value[1]) / 100).toFixed(2)}
          </label>
          <div id="buttons">
            <button className="More" onClick={() => holdd("Add", key)}>
              More
            </button>
            <button className="Less" onClick={() => holdd("Substract", key)}>
              Less
            </button>
          </div>
          {/* <input type="number" name="amount" id="" min={0} max={99} step={1} defaultValue={hold}/> */}
        </div>
      );
    }
    return tempHold;
  };

  return <div className="BuildControl">{generator(props.ingr)}</div>;
}
