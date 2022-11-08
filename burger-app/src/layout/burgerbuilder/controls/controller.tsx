import React, { Dispatch, SetStateAction } from "react";
import Control from "./control";
import { InitialStates, StaticIngrData } from "../../../controller/types";

interface contorllerFace {
  data: InitialStates;
  ingr: StaticIngrData;
  ingrUpdate: Dispatch<SetStateAction<StaticIngrData>>;
  refresh: Dispatch<SetStateAction<number>>;
  refreshData: number
}

export default function controller(props: contorllerFace) {
  return (
    <div className="BuildControll">
      <Control
        ingr={props.data}
        updateIngr={props.ingrUpdate}
        refresh={props.refresh}
        refreshData={props.refreshData}
      />
    </div>
  );
}
