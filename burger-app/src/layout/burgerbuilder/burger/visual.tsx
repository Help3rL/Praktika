import React from "react";
import { StaticIngrData } from "../../../controller/types";

interface visualFace{ 
  ingr: StaticIngrData
}
const visual = (props: visualFace) => {
  const genIngr = (ingr: StaticIngrData) => {
    let temphold: JSX.Element[] = [];
    Object.keys(ingr).forEach((element) => {
      for (let i = 0; i < Number(ingr[element][2]); i++) {
        temphold.push(
          <div
            className={String(ingr[element][0])}
            key={Number(
              (Math.random() * 1000).toFixed() + Number(new Date()) / 12
            )}
          ></div>
        );
      }
    });
    return temphold;
  };
  
  return (
    <div className="burgervisual" id="burger">
      <div className="topbun">
        <div className="Seed1"></div>
        <div className="Seed2"></div>
      </div>
      <div className="ingredients">{genIngr(props.ingr)}</div>
      <div className="bottombun"></div>
    </div>
  );
};
export default visual;
