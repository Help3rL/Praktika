import { Component } from "react";
import Aux from "../../hoc/auxs";
import Burgere from "./burger";
import Controls from "./controls/controlls";
import Modal from "../Layout/UI/Modal/modal";
import Order from "./order/order"
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
        clicked: false,
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

    purchase = () => {
        this.setState({clicked: true})
    };
    closeModal =() =>{
        this.setState({clicked: false})
    }
    purchaseConfirm =() =>{
        alert("finished")
    }
    render(){ 
        return(
            <Aux> 
                <Modal show={this.state.clicked} close={this.closeModal}>
                    <Order 
                        ingr={this.state.ingredients} 
                        close={this.closeModal} 
                        continue={this.purchaseConfirm}
                        price={this.state.basePrice}
                    />
                </Modal>
                <Burgere ingredients={this.state.ingredients}/>
                <Controls 
                    addIngr={this.addIngr} 
                    removeIngr={this.removeIngr}
                    price={this.state.basePrice}
                    purch={this.state.state}
                    click={this.purchase}
                />
            </Aux>
        ); 
    }
}
export default Burger;