import React from "react";
import Controls from "./controls/controller";
import Visual from "./burger/visual";
import "./burger.css";
import { Data } from "../../controller/types";
import * as actions from "../../controller/redux/actions/index";
import { connect } from "react-redux";

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

const mapStateToProps = (state: any) => {
  return {
    ings: state.burgerBuilderReducer.ingredients,
    price: state.burgerBuilderReducer.totalPrice,
    error: state.burgerBuilderReducer.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIngredientAdded: (ingName: string) =>
      dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName: string) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(builder);
