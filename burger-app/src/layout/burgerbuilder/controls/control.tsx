import React, { Dispatch, SetStateAction } from "react";
import { InitialStates, StaticIngrData } from "../../../controller/types";
import {addIngredient, removeIngredient} from '../../../controller/redux/actions/burgerBuilderActions'

let hold = 1 || undefined;

interface controlFace {
  ingr: InitialStates,
  updateIngr: Dispatch<SetStateAction<StaticIngrData>>
}
// props ===> from controller
export default function control(props: controlFace) {
  const holdd = (action: string, ingrName: string) => {
    hold = (props.ingr.ingr[ingrName][2] !== undefined ? Number(props.ingr.ingr[ingrName][2]) : hold);
    if (action === "Add" && hold < 100) {
      hold++;
      let hart = props.ingr.ingr[ingrName][2];
      console.log(props.updateIngr)
    } else if (action === "Substract" && hold > 0) {
      hold--;
      let hart = props.ingr.ingr[ingrName][2];
      
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
    console.debug(hen)
    const tempHold = [];
    for (const [key, value] of Object.entries(hen)) {
      tempHold.push(
        <div key={key + value} className="controlContainer">
          <label htmlFor="buttons" className="Label">
            {key}: {(Number(value[1]) / 100).toFixed(2)}€
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

  return <div className="BuildControl">{generator(props.ingr.ingr)}</div>;
}
