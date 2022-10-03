import React from 'react'
import Aux from '../../hoc/Hocs'
import Burger from '../../components/burger/Burger'
import BuildControls from '../../components/burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary'
import axios from '../../../src/axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { History } from "history";
import { connect, useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions/index'
import { useEffect, useState } from 'react'
import { InitialStateInterface } from '../../store/reducers/burgerBuilderReducer'
import { RootState }  from '../../index'

// export interface ActiveButton {
//   active: boolean
// }

export interface HistoryProp {
  history: History
}
// paziureti typus vietoj any
export interface BurgerBuilderProps extends HistoryProp {
  ings: IngredientsType | null
  onIngredientAdded : any
  onIngredientRemoved: any
  price:number
  error : boolean
  onInitIngredients():any
  onInitPurchase():any
  onSetAuthRedirectPath (path:string) : void
  isAuthenticated : boolean | null
  /* other props for ChildComponent */
}

export interface IngredientsType {
  salad:number 
  bacon:number
  cheese:number 
  meat:number 
  [key:string] : number ; 
}
export interface BurgerBuilderState {
  purchasing: boolean;
 
};

    const BurgerBuilder = (props:BurgerBuilderProps) => {
    
    const [purchasing, setPurchasing] = useState (false)
    const dispatch = useDispatch();

    const ings = useSelector<RootState> ((state) => {
          return state.burgerBuilderReducer?.ingredients
    })
    const price = useSelector<RootState> ((state) => state.burgerBuilderReducer?.totalPrice)
    const error = useSelector<RootState> ((state) => state.burgerBuilderReducer?.error)
    const isAuthenticated = useSelector<RootState> ((state) => state.authReducer?.token !== null)
    
   
    


    const onIngredientAdded = (ingName:string) => dispatch (actions.addIngredient(ingName));
    const onIngredientRemoved = (ingName:string) => dispatch (actions.removeIngredient(ingName));
    const onInitIngredients = () => dispatch(actions.initIngredients());
    const onInitPurchase = () => dispatch (actions.purchaseInit());
    const onSetAuthRedirectPath = (path:string) => dispatch(actions.setAuthRedirectPath(path))
    
   

    useEffect (() => {
      onInitIngredients()
    }, [onInitIngredients])
 
    const purchaseHandler = ():void => {
      if (props.isAuthenticated){
        setPurchasing(true)
      } else {
        onSetAuthRedirectPath('/checkout')
        props.history.push('/auth')
      }
      
    }
   
    const updatePurchaseState = (ingredients:IngredientsType) => {

      let sum:number
      
          sum = Object.keys(ingredients)
          .map(igKey => {
            return ingredients[igKey]
          })
          .reduce((sum, el) => {
            return sum + el;
          }, 0)
          return sum > 0;
      
    }
   
    
    const purchaseCancelHandler  = () => {
        setPurchasing(false)
    }
    const purchaseContinueHandler = () => {
      onInitPurchase()
      props.history.push('/checkout')
    }

   
      let orderSummary = null;
      let burger = props.error ? <p>Ingredients cant be loaded</p> : <Spinner/>
      if (props.ings) {
        burger = (
          <Aux>
            <Burger ingredients = {props.ings}/>
          <BuildControls
            ingredientAdded = {onIngredientAdded}
            ingredientRemoved = {onIngredientRemoved}
            // disabled = {disabledInfo}
            price = {props.price}
            ordered = {purchaseHandler}
            isAuth = {props.isAuthenticated}
            purchaseable = {updatePurchaseState(props.ings)}/>
          </Aux>
        );
        orderSummary = <OrderSummary 
        ingredients={props.ings} 
        purchaseCanceled = {purchaseCancelHandler}
        purchaseContinued = {purchaseContinueHandler}
        price = {props.price}
      />
      }
      
     
        // const disabledInfo = {
        //   ...this.state.ingredients
        // }
        // for (let key in disabledInfo){
        //   if(disabledInfo[key] > 0){
        //      this.setState({active: true})
        //   }
        // }
      return (
        <Aux>
          <Modal show = {purchasing} modalClosed = {purchaseCancelHandler} >
              {orderSummary}
          </Modal>
          {burger}
        </Aux>
      );
    }
  
// state turi buti abieju reduceriu kombinacija
  const mapStateToProps = (state : any ) => {
      return {
          ings: state.burgerBuilderReducer.ingredients,
          price: state.burgerBuilderReducer.totalPrice,
          error: state.burgerBuilderReducer.error,
          isAuthenticated: state.authReducer.token !== null
      };
  }
  // reik dispatch type
  const mapDispatchToProps = (dispatch:any) => {
      return {
        onIngredientAdded: (ingName:string) => dispatch (actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName:string) => dispatch (actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch (actions.purchaseInit()),
        onSetAuthRedirectPath: (path:string) => dispatch(actions.setAuthRedirectPath(path))
      }
  }
  export default connect(mapStateToProps, mapDispatchToProps) (WithErrorHandler(BurgerBuilder, axios));