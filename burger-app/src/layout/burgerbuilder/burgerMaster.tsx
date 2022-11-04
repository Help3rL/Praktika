import React, { useState } from "react";
import Controls from "./controls/controller";
import Visual from "./burger/visual";
import "./burger.css";
import {
  Data,
  InitialStates,
  StaticIngrData,
  UserState,
} from "../../controller/types";
import * as actions from "../../controller/redux/actions/index";
import { connect } from "react-redux";
import Module from "../../features/actions/modal/modal";
import Order from "../../controller/order/order";

// props ===> from App
interface builderFace {
  activedata: InitialStates;
  ingr: StaticIngrData;
  userData: UserState;
}

const Builder = (props: builderFace) => {
  const [Ingr, setIngr] = useState(props.ingr);
  const setIngrData = (Ingrs: StaticIngrData) => {
    setIngr(Ingrs);
  };
  const RenderOrder = (data: InitialStates) => {
    return (
      <Module>
        <Order activeData={data} userData={props.userData} />
      </Module>
    );
  };
  const [State, setState] = useState(false);
  return (
    <div className="Builder">
      <Visual ingr={Ingr} />
      <Controls
        data={props.activedata}
        ingr={Ingr}
        ingrUpdate={() => setIngrData(Ingr)}
      />
      {State == true ? (
        <RenderOrder
          loading={false}
          ingr={Ingr}
          totalPrice={1560}
          error={props.activedata.error}
          building={props.activedata.building}
          buying={props.activedata.buying}
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
