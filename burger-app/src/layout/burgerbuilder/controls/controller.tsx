import React, { Dispatch, SetStateAction } from "react";
import Control from "./control";
import { Data, InitialStates, StaticIngrData } from "../../../controller/types";
import { ActionFunction } from "react-router";

interface contorllerFace {
  data: InitialStates
  ingr: StaticIngrData
  ingrUpdate: Dispatch<SetStateAction<StaticIngrData>>
}

//props ===> from BuilderMaster

export default function controller(props: contorllerFace) {
  function _onClick(){

  }
  return (
    <div className="BuildControll">
      <Control
        ingr={props.data} 
        updateIngr={props.ingrUpdate}        
      />
    </div>
  );
}

