import { Component } from "react";
import Aux from "../../hoc/auxs";
import Burgere from "./burger";
import Controls from "./controls/controlls";
const INGR_PRICES = {
    tomato: 0.5,
    bacon: 0.75,
    cheese: 0.4,
    patty: 1.5,
}
class Burger extends Component{
    state= {
        ingredients:{
            tomato: 0,
            bacon: 0,
            cheese: 0,
            patty: 0,
        },
        basePrice: 2,
        state: false,
    }
    stateUpdater(ingr){
        const sum = Object.keys(ingr).map(igKey => {
            return ingr[igKey]
        }).reduce((sum, el) =>{
            return sum + el
        }, 0); 
        this.setState({state: sum > 0})
    }
    addIngr = (type)=>{
        const old = this.state.ingredients[type];
        const update = old + 1;
        const updIngr= {
            ...this.state.ingredients
        };
        updIngr[type] = update;

        const priceAdd = INGR_PRICES[type]
        const oldPrice = this.state.basePrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({basePrice: newPrice, ingredients: updIngr})
        this.stateUpdater(updIngr);
    }
    removeIngr = (type)=>{
        let old = this.state.ingredients[type];
        if (old <= 0) {
            return;
        }
        const update = old - 1;
        const updIngr= {
            ...this.state.ingredients
        };
        updIngr[type] = update;

        const priceDeduct = INGR_PRICES[type]
        const oldPrice = this.state.basePrice;
        const newPrice = oldPrice - priceDeduct;
        this.setState({basePrice: newPrice, ingredients: updIngr})
        this.stateUpdater(updIngr);
    }
    render(){
        return(
            <Aux>
                <Burgere ingredients={this.state.ingredients}/>
                <Controls 
                    addIngr={this.addIngr} 
                    removeIngr={this.removeIngr}
                    price={this.state.basePrice}
                    purch={this.state.state}
                />
            </Aux>
        ); 
    }
}
export default Burger;