import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Controls from "./controls/controller";
import Visual from "./burger/visual";
import "./burger.css";
import {
  InitialStates,
  StaticIngrData,
  UserState,
} from "../../controller/types";
// import * as actions from "../../controller/redux/actions/index";
// import { connect } from "react-redux";
import Module from "../../features/actions/modal/modal";
import Order from "../../controller/order/order";

// props ===> from App
interface builderFace {
  setIngrData: Dispatch<SetStateAction<StaticIngrData>>;
  activedata: InitialStates;
  ingr: StaticIngrData;
  userData: UserState;
}

const Builder = (props: builderFace) => {
  useEffect(() => {
    document.getElementById("burger");
  });

  const RenderOrder = (data: InitialStates) => {
    return (
      <Module click={() => setState(false)}>
        <Order activeData={data} userData={props.userData} />
      </Module>
    );
  };
  const [State, setState] = useState(false);
  return (
    <div className="Builder">
      <Visual ingr={props.ingr} />
      <Controls
        data={props.activedata}
        ingr={props.ingr}
        ingrUpdate={() => props.setIngrData}
      />
      {State === true ? (
        <RenderOrder
          loading={false}
          ingr={props.ingr}
          totalPrice={1560}
          error={props.activedata.error}
          building={props.activedata.building}
          buying={props.activedata.buying}
          basecost={props.activedata.basecost}
        />
      ) : (
        ""
      )}

      <button
        onClick={() => {
          setState(!State);
          props.activedata.buying = true;
          props.activedata.building = false;
        }}
      >
        Order
      </button>
    </div>
  );
};

// const mapStateToProps = (state: any) => {
//   return {
//     ings: state.burgerBuilderReducer.ingredients,
//     price: state.burgerBuilderReducer.totalPrice,
//     error: state.burgerBuilderReducer.error,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     onIngredientAdded: (ingName: string) =>
//       dispatch(actions.addIngredient(ingName)),
//     onIngredientRemoved: (ingName: string) =>
//       dispatch(actions.removeIngredient(ingName)),
//     onInitIngredients: () => dispatch(actions.initIngredients()),
//     onInitPurchase: () => dispatch(actions.purchaseInit()),
//   };
// };

export default Builder;
