import React, { Dispatch, SetStateAction } from "react";
import { InitialStates, StaticIngrData } from "../../../controller/types";
// import {
//   addIngredient,
//   removeIngredient,
// } from "../../../controller/redux/actions/burgerBuilderActions";

interface controlFace {
  ingr: InitialStates;
  updateIngr: Dispatch<SetStateAction<StaticIngrData>>;
}
// props ===> from controller
export default function control(props: controlFace) {

  const generator = (hen: StaticIngrData) => {
    console.debug(hen);
    const tempHold = [];
    for (const [key, value] of Object.entries(hen)) {
      tempHold.push(
        <div key={key + value} className="controlContainer">
          <label htmlFor="buttons" className="Label">
            {key}: {(Number(value[1]) / 100).toFixed(2)}€
          </label>
          <div id="buttons">
            <button
              className="More"
              onClick={() =>
                props.updateIngr({
                  ...hen,
                  key: [
                    value[0],
                    value[1],
                    value[2] !== undefined ? value[2]++ : value[2],
                  ],
                })
              }
            >
              More
            </button>
            <button
              className="Less"
              onClick={() =>
                props.updateIngr({
                  ...hen,
                  key: [
                    value[0],
                    value[1],
                    value[2] !== undefined ? value[2]-- : value[2],
                  ],
                })
              }
            >
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
